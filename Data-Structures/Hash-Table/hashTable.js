var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
    	debugger;
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index] || [];
      
      for(var i = 0; i < bucket.length; i++ ){
        var pair = bucket[i];
        if( pair[0] === key ){
          pair[1] = value;
          return;
        }
      }
      
      bucket.push([key,value]);
      storage[index] = bucket;
    };

    table.retrieve = function(key){
    	debugger;
      var bucket = storage;
      for(var i = 0; i < bucket.length; i++ ){
      	if (bucket[i] !== undefined){
      		for (var e = 0; e < bucket[i].length; e++){
      			if (key === bucket[i][e][0]){
      				return bucket[i][e][1];
      			}
      		}
      	}
      }
      return null;
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      var bucket = storage[index] || [];
      
      for( var i = 0; i < bucket.length; i++ ){
        var pair = bucket[i];
        if( pair[0] === key ){
          bucket.splice(i, 1)
          storageLimit--;
          if( storageLimit < storageLimit * 0.25 ){
            storageLimit(Math.floor(storageLimit/2));
          }
          return pair[1];
        }
      }
      return null;
    };
  return table;
};
    
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };