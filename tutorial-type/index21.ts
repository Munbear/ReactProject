// object index signatures

interface StringOnly {
    [key : string] : string // 모든 스트링 타입의 속성
}

let user :StringOnly= {
    name : 'kim',
    age : '20',
    location: 'seoul'
}

// recursive 타입

interface  myType {
    'font-size' : myType | number
}

let css :myType= {
    'font-size' : {
        'font-size' : {
            'font-size' : 14
        }
    }
}

