var PageId = 0;
var AccessToken = 0;
var PageName = 0;

var FbVersion = 'v2.2';


//Returns the page name 
//From the given pageId
function _getPageName(response, pageId){
  var retVal = null;
  console.log(response)
  if (response){
    var index = -1;
    //Find the offset needed for the page id
    for (var i = 0; i < response.data.length; i++){
      if (response.data[i].id == pageId) {
        index = i;
        break;
      }
    }
  
    if (index >= 0){
      console.log('Succesfully in getting page ' + response.data[index].id);
      console.log('page token ' + response.data[index].access_token);
    
      AccessToken = response.data[index].access_token;
      PageName = response.data[index].name;
      PageId = response.data[index].id;
    
      retVal = PageName;
      
    
    }
  
    else{
      console.log('No Accounts')
    }
  }
  
  return retVal;
}



//Given a response which holds post_impressions and a list of posts, essentially do a join on the two datasets
//Return the combined data
function _listFbPosts(response, data){
  var retVal = [];
  if(response && data){
    var size = 0;
    var insightValues = {};
  
    //For each key, value in response, put in the metric we want
    //In this case it is post_impressions
    $.each(response, function(key, value) {
      if (value != null && value.data != null && value.data.length == 1 && value.data[0].values != null && value.data[0].values.length == 1){
        insightValues[key] = value.data[0].values[0].value;
      }
      else{
        console.log("Post Insight did not get any valid data back")
      }
    });
  


    console.log(insightValues);
  
    //Need to empty because on refresh it will append to the existing table
    for(i=0; i<data.data.length; i++){
      message = data.data[i].message;
      if(message == undefined){
        message = data.data[i].story;
      }
    
      retVal[i] = {id: data.data[i].id, message: message, is_published: data.data[i].is_published, 
        created_time: data.data[i].created_time, post_impressions: insightValues[data.data[i].id]};
    }
  }
  return retVal;
}




//Get a list of pages that this user has access to
function _handleFbAccounts(response){
  var size = 0, key;
  var retVal = null;
  if(response){
    for (key in response.data){
        if (response.data.hasOwnProperty(key)) size++;
      }

      if (size > 0){
        console.log('Succesfully in getting pages ' + response.data[0].id);
        console.log('page token ' + response.data[0].access_token);
      
        retVal = []
      
        for(i=0; i<size; i++){
            retVal[i] = {id: response.data[i].id, name: response.data[i].name };
        }
      
      }

      else{
        console.log('No pages to manage');
      }
  }
  
  return retVal;
}