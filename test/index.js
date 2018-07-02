const cmlog = require("../dist/index");

cmlog.opt.debug = false;

cmlog.debug("export something");
cmlog.warn("Something is going to happen soon");
cmlog.success("Build succeeed in 10 seconds");
cmlog.info("Some extra info is here");
cmlog.error(new Error("Foo"));

const { Cmlog } = require("../dist/index");

const C = new Cmlog({
                      time : true,
                      debug: false
                    });

C.debug("test");
C.debug("test");
C.info("testsss");