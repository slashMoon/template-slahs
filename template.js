/**
 * 
 * @param {*自定义模板id} id 
 * @param {*匹配的对象} data 
 */
function template(id, data) {

  var id = document.getElementById(id);
  var html = id.innerHTML;
  var reg = /{{(\w+)}}/;

  var result = null;
  while (result = reg.exec(html)) {
    html = html.replace(result[0], data(result[1]))
  };
  
  return html;

}
