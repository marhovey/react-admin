export const getCookie = function (name: string) {
  if (document.cookie.length>0) {
    let c_start=document.cookie.indexOf(name + "=")
    if (c_start!==-1) {
      c_start=c_start + name.length + 1
      let c_end=document.cookie.indexOf(";",c_start)
      if (c_end===-1) c_end=document.cookie.length
      return document.cookie.substring(c_start, c_end)
    }
  }
  return ''
};

export const setCookie = function (name: string, value: string, day: number) {
  var exp = new Date();
  exp.setTime(exp.getTime() + day*24*60*60*1000);
  document.cookie = `${name}=${value};expires=${exp.toUTCString()}`;
};

export const delCookie = function (name: string) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var val = getCookie(name);
  if (val != null) {
    document.cookie = `${name}=${val};expires=${exp.toUTCString()}`;
  }
};
