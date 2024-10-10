/**
 * 문제 풀이
 * 1) Country 클래스는 나라 이름과 나라에 해당되는 아이돌 그룹 정보를 리스트로 들고 있다. 
 * (name, idolGroups 프로퍼티)
 * 2) IdolGroup 클래스는 아이돌 그룹 이름과 멤버 정보를 이스트로 돌고 있다.
 * (name, members 프로퍼티)
 * 3) Idol 클래스는 아이돌 이름과 이름과 출생년도 정보를 들고 있다. 
 * (name, year 프로퍼티)
 * 4) MaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다. 
 * 추가로 sing() 함수를 실행하면 ${이름}이 노래를 합니다. 라는 스트링을 반환해준다.
 * 5) FemaleIdol 클래스는 Idol 클래스와 동일하게 name, year 프로퍼티가 존재한다.
 * 추가로 dance() 함수를 실행하면 ${이름}이 춤을 춥니다. 라는 스트링을 반환해준다. 
 */

const iveMembers = [
    {
        name: '안유진',
        year: 2003,
    },
    {
        name: '가을',
        year: 2002,
    },
    {
        name: '레이',
        year: 2004,
    },
]

const bigbangMembers = [
    {
        name: '지드래곤',
        year: 1988,
    },
    {
        name: '태양',
        year: 1988,
    },
    {
        name: '대성',
        year: 1989,
    },
]

class County {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemalIdol extends Idol {
    sing() {
        return `${this.name}이 노래를 합니다.`;
    }
}

class MaleIdol extends Idol {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const cIveMembers = iveMembers.map(
    (x) => new FemalIdol(x['name'], x['year']),
);
console.log(cIveMembers);

const cBigbangMembers = bigbangMembers.map(
    (x) => new MaleIdol(x['name'], x['year']),
);
console.log(cBigbangMembers);

const iveGroup = new IdolGroup(
    '아이브',
    cIveMembers,
)
console.log(iveGroup);

const bigbangGroup = new IdolGroup(
    '빅뱅',
    cBigbangMembers,
);
console.log(bigbangGroup);

const korea = new County(
    '대한민국', 
    [
        iveGroup,
        bigbangGroup,
    ],
);
console.log(korea);

const allTogether = new County(
    '대한민국',
    [
        new IdolGroup(
            '아이브',
            iveMembers.map(
                (x) => new FemalIdol(x['name'], x['year']),
            ),
        ),
        new IdolGroup(
            '빅뱅',
            bigbangMembers.map(
                (x) => new MaleIdol(x['name'], x['year']),
            ),
        ),
    ]
)
console.log(allTogether);