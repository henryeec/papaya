var personList = [
    {
        name: '黃建洲',
        birthday: '1998-01-23',
        phone: '02-7738-6790',
        height: 180,
        mathgrades:50
    },
    {
        name: '黃書霈',
        birthday: '1998-02-03',
        phone: '0963-975-732',
        height: 190,
        mathgrades:30
    }, 
    {
        name: '曾柏硯',
        birthday: '1997-11-08',
        phone: '02-7738-6790',
        height: 177,
        mathgrades:100
    },
    {
        name: '卓信宏',
        birthday: '1998-06-24',
        phone: '0906-420-206',
        height: 165,
        mathgrades:90
    },
    {
        name: '江俊廷',
        birthday: '1998-02-06',
        phone: '0980-474-394',
        height: 174,
        mathgrades:20
    },
    {
        name: '黃建祐',
        birthday: '1997-01-02',
        phone: '0985-240-025 ',
        height: 170,
        mathgrades:40
    },
    {
        name: '郭品妤',
        birthday: '2000-08-29',
        phone: '02-7729-3051',
        height: 155,
        mathgrades:70
    },
    {
        name: '鍾麗文',
        birthday: '1999-08-01',
        phone: '0972-773-551',
        height: 167,
        mathgrades:10
    }, 
    {
        name: '陳品羚',
        birthday: '1999-03-01',
        phone: '0986-168-147',
        height: 160,
        mathgrades:80
    },
    {
        name: '孫妤瑄',
        birthday: '1999-02-13',
        phone: '04-2206-0506',
        height: 163,
        mathgrades:0
    }
];

var lotto649List;

function personHtml () {
    var html = '',
        i;
    for (i = 0; i < personList.length; ++i) {
        html += '<tr>';
        html += '<td>' + personList[i].name + '</td>';
        html += '<td>' + personList[i].birthday + '</td>';
        html += '<td>' + personList[i].phone + '</td>';
        html += '<td>' + personList[i].height + '</td>';
        html += '<td>' +
        personList[i].mathgrades + '</td>';
        html += '</tr>';
    }
    return html;
}

function lotto649ListGenerator (num) {
    var i;
    
    lotto649List = [];
    for (i = 0; i < num; ++i) {
        lotto649List.push(lotto649());
    }
}

function lotto649 (size) {
    var lotto649Item = [],
        lotto649Number,
        i;
    size = size || 6;
    
    for (i = 0; i < size; ++i) {
        lotto649Number = Math.floor(Math.random() * 49 +1);
        if (-1 === lotto649Item.indexOf(lotto649Number)) {
            lotto649Item.push(lotto649Number);
        } else {
            --i;
            continue;
        }
    }
    return lotto649Item;
}


function lotto649Html (winNumber) {
    var html = '',
        i;
    for (i = 0 ; i < lotto649List.length; ++i) {
        html +='<li>';
        html += winNumber ? lotto649CheckHtml(lotto649List[i], winNumber) : lotto649CheckHtml(lotto649List[i]);
        html +='</li>';
    }
    return html;
}

function lotto649CheckHtml (lottoItem, winNumber) {
    var html = '',
        i, bingoPlace,
        bingoCounter = 0, spCounter = 0;
    html += '<ul class="lotto649">';
    if (winNumber) {
        
        for (var i = 0; i < lottoItem.length; ++i) {
            bingoPlace = winNumber.indexOf(lottoItem[i]);
            if (6 === bingoPlace) {
                spCounter++;
                html += '<li class="sp">';
            } else if (-1 !== bingoPlace){
                bingoCounter++;
                html += '<li class="bingo">'; 
            } else {
                html += '<li>';
            }
            html += lottoItem[i];
            html += '</li>';
        }
        html += '<li class="text">';
        if (6 === bingoCounter) {
            html += '頭獎';
        } else if (5 === bingoCounter) {
            html += 1 === spCounter ? '貳獎' : '參獎';
        } else if (4 === bingoCounter) {
            html += 1 === spCounter ? '肆獎' : '伍獎';
        } else if (3 === bingoCounter) {
            html += 1 === spCounter ? '陸獎 NT$1,000' : '普獎 NT$400';
        } else if (2 === bingoCounter && 1 === spCounter) {
            html += '柒獎 NT$400';
        } else {
            html += '沒中獎QAQ';
        }
        html += '</li>';
    } else {
        for (i = 0; i < lottoItem.length; ++i) {
            html += '<li>';
            html += lottoItem[i];
            html += '</li>';
        }
    }
    html += '</ul>';
    return html;
}

function lotto649WinHtml (winNumber) {
    var html = '',
        i;
    for (i = 0 ; i < winNumber.length; ++i) {
        html +=  6 === i ? '<li class="sp">' : '<li>';
        html += winNumber[i];
        html += '</li>';
    }
    return html;
} 

document.addEventListener//註冊一個事件
('DOMContentLoaded', function (event) {
    var personBody = document.getElementById('personBody'),
        heightDESCBtn = document.getElementById('heightDESCBtn'),
        birthdayASCBtn = document.getElementById('birthdayASCBtn'),
        birthdayASCBtn = document.getElementById('mathgradesASCBtn'),
        lotto649Num = document.getElementById('lotto649Num'),
        lotto649Ol = document.getElementById('lotto649Ol'),
        lotto649Btn = document.getElementById('lotto649Btn'),
        lotto649WinNumber = document.getElementById('lotto649WinNumber');
    
    //個人資料
    //將陣列的資料顯示到網頁上
    personBody.innerHTML = personHtml();
    //按下“身高由大到小”時執行的程式
    heightDESCBtn.addEventListener('click', function (event) {
        personList.sort(function (person1, person2) {
            return person2.height - person1.height;
        });
        personBody.innerHTML = personHtml();
    });
    //按下“生日由小到大”時執行的程式
    birthdayASCBtn.addEventListener('click', function (event) {
        personList.sort(function (person1, person2) {
            return new Date(person2.birthday) - new Date(person1.birthday);
        });
        personBody.innerHTML = personHtml(); 
    });
    //按下“生日由小到大”時執行的程式
    mathgradesASCBtn.addEventListener('click', function (event) {
        personList.sort(function (person2, person1) {
            return new Date(person2.mathgrades) - new Date(person1.mathgrades);
        });
        personBody.innerHTML = personHtml(); 
    });
    //樂透
    //產生多組樂透
    lotto649Num.addEventListener('change', function (event) {
        lotto649ListGenerator(lotto649Num.value);
        lotto649Ol.innerHTML = lotto649Html();
    });
    //產生中獎號碼並兌獎
    lotto649Btn.addEventListener('click', function (event) {
        var winNumber = lotto649(7);
        lotto649WinNumber.innerHTML = lotto649WinHtml(winNumber);
        lotto649Ol.innerHTML = lotto649Html(winNumber);
    });
    
});