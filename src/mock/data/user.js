import Mock from 'mockjs';
const LoginUsers = [{
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某',
    role: [0]
  },
  {
    id: 2,
    username: 'ceshi',
    password: '123456',
    avatar: '',
    name: '高某某',
    role: [1]
  },
  {
    id: 3,
    username: 'wuliuju',
    password: '123456',
    avatar: '',
    name: '物流局',
    role: [2]
  }
];
const Role = [{
    id: 1,
    roleName: '管理员',
    menu: {},
    role: 0
  },
  {
    id: 2,
    roleName: '测试',
    menu: {},
    role: 1
  },
  {
    id: 3,
    roleName: '物流局',
    menu: {},
    role: 2
  }
];
const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export {
  LoginUsers,
  Users,
  Role
};
