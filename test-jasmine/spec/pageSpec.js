describe("page", function() {
    it("calls the _getPageName function", function() {
        pageId = 0
        expect(_getPageName(null, pageId)).toBeNull();
    });
});



describe("page", function() {
    it("calls the _getPageName function and finds page name", function() {
      var data = []
      counter = 0;
      id = 123;
      pageName = "hello";
      data[counter] = {id: id, access_token: 0, name: pageName};
      expect(_getPageName({data: data}, id)).toEqual(pageName);
    });
});




describe("page", function() {
    it("calls the _getPageName function and doesn't find page", function() {
      var data = []
      counter = 0;
      id = 123;
      pageName = "hello";
      data[counter] = {id: id, access_token: 0, name: pageName};
      expect(_getPageName({data: data}, 0)).toBeNull();
    });
});


describe("page", function() {
    it("calls the _handleFbAcounts with null", function() {
      expect(_handleFbAccounts(null)).toBeNull();
    });
});


describe("page", function() {
    it("calls the _handleFbAcounts get id and name", function() {
      var data = []
      counter = 0;
      id = 123;
      pageName = "hello";
      data[counter] = {id: id, access_token: 0, name: pageName};
      expected = [{id: id, name: pageName}];
      expect(_handleFbAccounts({data: data}, 0)).toEqual(expected);
    });
});


describe("page", function() {
    it("calls the _listFbPosts returns empty", function() {
      expected = []
      expect(_listFbPosts(null, null)).toEqual(expected);
    });
});



describe("page", function() {
    it("calls the _listFbPosts returns data", function() {
      var data = []
      counter = 0;
      id = 123;
      isPublished = true;
      createdTime = 1;
      data[counter] = {id: id, access_token: 0, name: pageName};
      expected = [{id: id, name: pageName}];
      dict = {}
      dict[id] = 1
      expect(_listFbPosts({data: data}, dict)).toEqual(expected);
    });
});


