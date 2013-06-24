define(['models/job'], function(Job){
	/**
	Extracts a single element from Google feed single line catering for the case where it's null

	@param {string} the string line to search
	@param {string} the field to match
	**/
	var extractSingleElement = function(strJobInfo, fieldName){
			var regex = new RegExp(fieldName + ': ([^,|$]+)');
			var matches = strJobInfo.match(regex);
			if(matches && matches.length === 2){
				return matches[1];
			}
			else { return '';}
	}


	/**
	Takes a string in the weird format published by Google docs (comma separated list with semicolons identifiers)
	and returns a Job object
	sample string: company: ConnectIT, from: 22-01-2008, to: 25-01-2008, description: Junior developer

	@param {string} the title of the job
	@param {string} the string to be parsed

	**/
	var parseJobInfo = function(title, jobInfo){
		
		var	company = extractSingleElement(jobInfo, 'company'),
			fromDate = extractSingleElement(jobInfo, 'from'),
			toDate = extractSingleElement(jobInfo, 'to'),
			description = extractSingleElement(jobInfo, 'description');

		var options =  {};
		options.title = title;
		options.company = company;
		options.startDate = fromDate;
		options.endDate = toDate;
		options.description = description;

		var job = new Job(options);
		return job;
	};

	/**
	Creates a CV object
	@constructor
	**/
	var CV = function(options){
		this.name = options && options.name;
		this.jobs = [];
		this.parseGoogleFeed = function(jsonFeed){
			var entries = jsonFeed.feed.entry;

			for(var i=0; i<entries.length; i++){
				var entry = entries[i];
				var job = parseJobInfo(entry.title.$t, entry.content.$t);
				this.jobs.push(job);
			}
		};
	}

	return CV;
});