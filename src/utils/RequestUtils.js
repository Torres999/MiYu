import { API } from "../configs/index";

export function formatUrl(path) {
    let adjustedPath = path[0] !== '/' ? `/${path}` : path;
    adjustedPath = API.ROOT + adjustedPath;
    return adjustedPath;
}

export function sendPostForm(url, param, callback) {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(param)
    };
    fetch(formatUrl(url), options)
        .then((response) =>
            response.text()
        )
        .then((responseText) => {
            callback(JSON.parse(responseText));
        })
        .catch((error) => {
            console.log(error)
        }).done();
}

export function sendGet(url, param, success) {
    // 总长度
    var totalParamStr = '';

    // 判断字典参数是否有值
    // 把字典转换为字符串,如果字典为空,转换为'{}'
    var jsonStr = JSON.stringify(param);

    // if (jsonStr != '{}') {
    //     // 符合
    //     var mark = '?';
    //     var i = 0;
    //
    //     for (key in param) {
    //         if (i > 0) {
    //             mark = '&'
    //         }
    //         var value = param[key];
    //         var paramStr = mark + key + '=' + value;
    //         totalParamStr += paramStr;
    //         i++;
    //     }
    // }

    // 拼接url
    url += totalParamStr;

    fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
            success(JSON.parse(responseText));
        })
        .catch((error) => {
            // failure(error)
            console.log(error)
        })
}