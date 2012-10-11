install_npm:
	@npm install -g testem
	@npm install -d

install_jscoverage:
	@git clone git://github.com/visionmedia/node-jscoverage.git
	@cd node-jscoverage && ./configure && make && make install

install: install_npm install_jscoverage
    
