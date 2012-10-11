install-npm:
    @sudo npm install -g testem
    @npm install -d

install-jscoverage:
    @git clone git://github.com/visionmedia/node-jscoverage.git
    @cd node-jscoverage && ./configure && make && make install

install: install-npm install-jscoverage
    