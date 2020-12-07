// Your code goed here

class User {
    constructor(obj) {
        this.id = obj.id;
        this.rm_id = obj.rm_id;
        this.name = obj.name;
        this.performance = obj.performance;
        this.lastVacationDate = obj.last_vacation_date;
        this.salary = obj.salary;
    }
}

class UserGroup {
    constructor(id, composites = []) {
        this.id = id;
        this.composites = composites;
    }
    add(user) {
        this.composites.push(user);
    }
    getGroup() {
        for (let i of this.composites) {
            return i;
        }
    }
}

const list = document.querySelector('.list');
const btnTab = document.querySelector('.btn-empl-tab');
const btnUnit = document.querySelector('.btn-empl-unit');
const btnSalary = document.querySelector('.btn-salary');
const btnReset = document.querySelector('.btn-reset');

const choiseByLessSalaryStrategy = (user, salary) => {
    return user.salary < salary ? user : null;
}

const choiseByAboveSalaryStrategy = (user, salary) => {
    return user.salary >= salary ? user : null;
}

const choiseByRmIdStrategy = (user, rmId) => {
    if (user.rm_id === rmId) {
        return user;
    }
}

const createLi = (userGroup, list, user) => {
    const item = document.createElement('li');
    userGroup.add(new User(user))
    item.textContent = `rm-id-${user.rm_id} ${user.name}`;
    list.append(item);
}

btnReset.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.reload();
})

btnTab.addEventListener('click', load)
async function load() {
    btnTab.setAttribute('disabled', '')
    btnUnit.setAttribute('disabled', '');
    btnSalary.setAttribute('disabled', '');
    let file = '../homework/mock.json';
    let obj = await fetch(file);
    let mock = await obj.json();
    for (let user of mock) {
        const item = document.createElement('li');
        item.textContent = `${user.id} ${user.name}`;
        list.appendChild(item);

        item.addEventListener('click', () => {
            item.className = 'disabled';
            const userProperties = document.createElement('ol');
            item.append(userProperties)
            let userArr = Object.entries(user);
            for (let [i,j] of userArr) {
                const liUser = document.createElement('li');
                liUser.textContent = `${i} : ${j}`;
                userProperties.append(liUser);
            }
        })
    }
}

const mTwo = 2; const mThree = 3; const mFour = 4; const mFive = 5; const mSix = 6;
const mSeven = 7; const mEight = 8; const mNine = 9; const mTen = 10;

btnUnit.addEventListener('click', unitLoad);
async function unitLoad(event) {
    event.preventDefault();
    btnTab.setAttribute('disabled', '')
    btnUnit.setAttribute('disabled', '');
    btnSalary.setAttribute('disabled', '');

    const file = '../homework/mock.json';
    const obj = await fetch(file);
    const mock = await obj.json();
    let rms = []
    let set = new Set();
    for (let user of mock) {
        set.add(user.rm_id);
        rms = Array.from(set);
    }
    let userGroupRm = new UserGroup(null);
    let userGroupOne = new UserGroup(rms[1]);
    let userGroupTwo = new UserGroup(rms[mTwo]);
    let userGroupThree = new UserGroup(rms[mThree])
    let userGroupFour = new UserGroup(rms[mFour]);
    let userGroupFive = new UserGroup(rms[mFive]);
    let userGroupSix = new UserGroup(rms[mSix]);
    let userGroupSeven = new UserGroup(rms[mSeven]);
    let userGroupEight = new UserGroup(rms[mEight]);
    let userGroupNine = new UserGroup(rms[mNine]);
    let userGroupTen = new UserGroup(rms[mTen]);
    const olOne = document.createElement('ol');
    const olTwo = document.createElement('ol');
    const olThree = document.createElement('ol');
    const olFour = document.createElement('ol');
    const olFive = document.createElement('ol');
    const olSix = document.createElement('ol');
    const olSeven = document.createElement('ol');
    const olEight = document.createElement('ol');
    const olNine = document.createElement('ol');
    const olTen = document.createElement('ol');
    for (let user of mock) {
        if (choiseByRmIdStrategy(user, null)) {
            createLi(userGroupRm, list, user);
            list.append(document.createElement('hr'));
        }
        if (choiseByRmIdStrategy(user, rms[1])) {
            createLi(userGroupOne, olOne, user);
        }
        if (choiseByRmIdStrategy(user, rms[mTwo])) {
            createLi(userGroupTwo, olTwo, user);
        }
        if (choiseByRmIdStrategy(user, rms[mThree])) {
            createLi(userGroupThree, olThree, user);
        }
        if (choiseByRmIdStrategy(user, rms[mFour])) {
            createLi(userGroupFour, olFour, user);
        }
        if (choiseByRmIdStrategy(user, rms[mFive])) {
            createLi(userGroupFive, olFive, user);
        }
        if (choiseByRmIdStrategy(user, rms[mSix])) {
            createLi(userGroupSix, olSix, user);
        }
        if (choiseByRmIdStrategy(user, rms[mSeven])) {
            createLi(userGroupSeven, olSeven, user);
        }
        if (choiseByRmIdStrategy(user, rms[mEight])) {
            createLi(userGroupEight, olEight, user);
        }
        if (choiseByRmIdStrategy(user, rms[mNine])) {
            createLi(userGroupNine, olNine, user);
        }
        if (choiseByRmIdStrategy(user, rms[mTen])) {
            createLi(userGroupTen, olTen, user);
        }
    }
    list.append(olOne);
    list.append(document.createElement('hr'))
    list.append(olTwo);
    list.append(document.createElement('hr'))
    list.append(olThree);
    list.append(document.createElement('hr'))
    list.append(olFour)
    list.append(document.createElement('hr'))
    list.append(olFive);
    list.append(document.createElement('hr'))
    list.append(olSix);
    list.append(document.createElement('hr'))
    list.append(olSeven);
    list.append(document.createElement('hr'))
    list.append(olEight);
    list.append(document.createElement('hr'))
    list.append(olNine);
    list.append(document.createElement('hr'))
    list.append(olTen);
}

const mThousand = 1000;

btnSalary.addEventListener('click', salary);
async function salary(event) {
    event.preventDefault();
    btnTab.setAttribute('disabled', '')
    btnUnit.setAttribute('disabled', '');
    btnSalary.setAttribute('disabled', '');

    let file = '../homework/mock.json';
    let obj = await fetch(file);
    let mock = await obj.json();

    let userGroupLessThousand = new UserGroup(1);
    let userGroupAboveThousand = new UserGroup(mTwo);
    const olOne = document.createElement('ol');
    const olTwo = document.createElement('ol');
    for (let user of mock) {
        if (choiseByLessSalaryStrategy(user, mThousand)) {
            const item = document.createElement('li');
            userGroupLessThousand.add(new User(user));
            item.textContent = `${user.name} ${user.salary}`;
            olOne.append(item);
        }
        if (choiseByAboveSalaryStrategy(user, mThousand)) {
            const item = document.createElement('li');
            userGroupAboveThousand.add(new User(user));
            item.textContent = `${user.name} ${user.salary}`;
            olTwo.append(item);
        }
    }
    list.insertAdjacentHTML('afterbegin', '<p>Salary less then 1000</p>');
    list.append(olOne);
    list.insertAdjacentHTML('beforeend', '<p>Salary above then 1000</p>');
    list.append(olTwo);
}