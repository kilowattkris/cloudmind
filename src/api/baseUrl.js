export default function getBaseUrl(){
    // const inDevelopment = window.location.hostname === 'localhost';
    // return inDevelopment ? 'http://localhost:3001/' : '/';
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://vast-crag-14976.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
    if(!url) url = window.location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    if(!results) return null;
    if(!results[1]) return "";
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
