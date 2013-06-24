define(function(Job){
	/**
	* Creates a Job object out of options object
	* @constructor
	**/
	var job = function(options){
		if(options){
			this.title = options.title;
			this.company = options.company;
			this.startDate = options.startDate;
			this.endDate = options.endDate;
			this.description = options.description;
		}
	}

	return job;
});