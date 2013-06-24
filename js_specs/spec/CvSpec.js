define(["../../js/models/cv", "spec/sampleFeed"], function (CV, sampleFeed) {

    var googleFeed = "",
      cv = new CV();

    cv.parseGoogleFeed(sampleFeed);

    describe("Google feed after parsing", function () {

        it("should have two jobs", function() {
            expect(cv.jobs.length).toEqual(2);
        });

        describe("The first of these two jobs", function(){
          var job = cv.jobs[0];
          
          it("should have a title", function(){
            expect(job.title).toEqual("Junior Developer");
          });

          it("should have a company name", function(){
            expect(job.company).toEqual("ConnectIT");
          });

          it("should have a Start Date", function(){
            expect(job.startDate).toEqual("22-01-2008");
          });

          it("should have an End Date", function(){
            expect(job.endDate).toEqual("25-01-2008");
          });

          it("should have a description", function(){
            expect(job.description).toEqual("Junior developer");
          });
        });

        /* Fixes a bug in the first iteration of the code where it crashes when a field is not provided in the Excel sheet*/
        describe("When a field is empty", function(){
          var job = cv.jobs[1];
          it("should not fail to parse", function(){
            expect(job.description).toEqual('');
          })
        });

        xdescribe("A bug where the comma in a cell in the excel sheet breaks the parsing of the feed because Google JSON format is just weird.
            Will write a test then fix it.");
    });
});