const urlUtils = {
  getQuery(url){
     let query = {};
     let hashes = url.slice(url.indexOf('?') + 1).split('&');
     for(let i = 0; i < hashes.length; i++) {
         const hash = hashes[i].split('=');
         query[hash[0]] = hash[1];
     }
     return query;
  },
  getStoreId() {
    return this.getQuery(window.location.href).storeId
  }
}

export default urlUtils
