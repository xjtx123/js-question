// 例子：var arr = [15, [1, new Number(10), 2], { a: 3, b: [4, 7, 8] }, [6, 7, 8, 9, [11, 12, [12, 13, [14]]]]];
// 返回： [1, 2, 3, 4, 6, 7, 8, 9, 10，11, 12, 13, 14, 15]

var arr = [15, [1, new Number(10), 2], { a: 3, b: [4, 7, 8] }, [6, 7, 8, 9, [11, 12, [12, 13, [14]]]]];

function flat(arr) {
    return arr.reduce((prev, cur) => {
        if (typeof cur === 'number') {
            return [...prev, cur]
        }
        if (typeof cur === 'object') {
            if (cur instanceof Array) {
                return [...prev, ...flat(cur)]
            }
            if (cur instanceof Number) {
                return [...prev, cur.valueOf()]
            }
            if (cur) {
                return [...prev, ...flat(Object.values(cur))]
            }
        }
    }, [])
}

function unique(arr) {
    // return Array.from(new Set(arr))
    return Object.keys(arr.reduce((prev, cur) => ({ ...prev, [cur]: 1 }), {})).map(Number).map(x => Number(x))
}

function  resolve(arr) {
    return unique(flat(arr)).sort((a, b) => a - b)
}
