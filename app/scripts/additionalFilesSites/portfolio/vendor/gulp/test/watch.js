"use strict";var gulp=require("../"),fs=require("graceful-fs"),rimraf=require("rimraf"),mkdirp=require("mkdirp"),path=require("path"),should=require("should");require("mocha");var outpath=path.join(__dirname,"./out-fixtures");describe("gulp",function(){describe("watch()",function(){beforeEach(rimraf.bind(null,outpath)),beforeEach(mkdirp.bind(null,outpath)),afterEach(rimraf.bind(null,outpath));var t="A test generated this file and it is safe to delete",e=125,n=function(t,n,o){o||(o=function(){}),setTimeout(function(){fs.writeFile(t,n,o)},e)};it("should call the function when file changes: no options",function(e){var o=path.join(outpath,"watch-func.txt");fs.writeFile(o,t,function(){var a=gulp.watch(o,function(t){should.exist(t),should.exist(t.path),should.exist(t.type),t.type.should.equal("changed"),t.path.should.equal(path.resolve(o)),a.end(),e()});n(o,t+" changed")})}),it("should call the function when file changes: w/ options",function(e){var o=path.join(outpath,"watch-func-options.txt");fs.writeFile(o,t,function(){var a=gulp.watch(o,{debounceDelay:5},function(t){should.exist(t),should.exist(t.path),should.exist(t.type),t.type.should.equal("changed"),t.path.should.equal(path.resolve(o)),a.end(),e()});n(o,t+" changed")})}),it("should not drop options when no callback specified",function(e){var o=path.join(outpath,"watch-func-nodrop-options.txt"),a="../watch-func-nodrop-options.txt",u=outpath+"/subdir";fs.writeFile(o,t,function(){var i=gulp.watch(a,{debounceDelay:5,cwd:u}).on("change",function(t){should.exist(t),should.exist(t.path),should.exist(t.type),t.type.should.equal("changed"),t.path.should.equal(path.resolve(o)),i.end(),e()});n(o,t+" changed")})}),it("should run many tasks: w/ options",function(o){var a=path.join(outpath,"watch-task-options.txt"),u="task1",i="task2",s="task3",h=0,l=2.5*e;fs.writeFile(a,t,function(){gulp.task(u,function(){h++}),gulp.task(i,function(){h+=10}),gulp.task(s,function(){throw new Error("task3 called!")});var e={debounceDelay:l/2},c=gulp.watch(a,e,[u,i]);setTimeout(function(){h.should.equal(11),gulp.reset(),c.end(),o()},l),n(a,t+" changed")})}),it("should run many tasks: no options",function(o){var a=path.join(outpath,"watch-many-tasks-no-options.txt"),u="task1",i="task2",s="task3",h=0,l=2.5*e;fs.writeFile(a,t,function(){gulp.task(u,function(){h++}),gulp.task(i,function(){h+=10}),gulp.task(s,function(){throw new Error("task3 called!")});var e=gulp.watch(a,[u,i]);setTimeout(function(){h.should.equal(11),gulp.reset(),e.end(),o()},l),n(a,t+" changed")})})})});
//# sourceMappingURL=watch.js.map
