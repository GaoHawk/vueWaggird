import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  LoginUsers,
  Users,
  Role
} from './data/user';
let _Users = Users;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {
        username,
        password
      } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, {
              code: 200,
              msg: '请求成功',
              user
            }]);
          } else {
            resolve([200, {
              code: 500,
              msg: '账号或密码错误'
            }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {
        name
      } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });
    // 获取登录用户列表
    mock.onGet('/loginUser/list').reply(config => {
      let {
        name
      } = config.params;
      let mockUsers = LoginUsers.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      })
    })

    // 获取角色列表
    mock.onGet('/role/list').reply(config => {
      let {
        roleNum
      } = config.params;
      let mockRole = Role.filter(role => {
        if (roleNum && role.role.indexOf(roleNum) == -1) return false;
        return true;
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            roler: mockRole
          }])
        }, 1000)
      })
    })

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {
        page,
        name
      } = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    // 删选男女用户
    mock.onGet('/user/withSex').reply(config => {
      let {
        page,
        sex
      } = config.params;
      let mockUsers = Users.filter(user => {
        if (sex && user.sex.indexOf(sex) == -1) return false;
        return true;
      })
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let {
        id
      } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let {
        ids
      } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let {
        id,
        name,
        addr,
        age,
        birth,
        sex
      } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //编辑登录用户
    mock.onGet('/user/editUser').reply(config => {
      let {
        id,
        username,
        password,
        avatar,
        name
      } = config.params;
      LoginUsers.some(u => {
        if (u.id === id) {
          u.password = password;
          u.avatar = avatar;
          u.name = name;
          return true
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '用户修改成功'
          }])
        }, 500)
      })
    })

    //用户添加角色
    mock.onGet('/user/addRole').reply(config => {
      let {
        id,
        role
      } = config.params;
      LoginUsers.some(u => {
        if (u.id === id) {
          u.role = role;
          return true
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '角色添加成功'
          }])
        }, 500)
      })
    })

    // 角色添加菜单
    mock.onGet('/role/addMenu').reply(config => {
      let {
        id,
        roleName,
        menu,
      } = config.params;
      Role.some(u => {
        if (u.id === id) {
          u.roleName = roleName;
          u.menu = menu
          return true;
        }
      });
      return new Promise((resolve, rejcet) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '添加菜单成功'
          }])
        }, 500)
      })
    })
    //新增用户
    mock.onGet('/user/add').reply(config => {
      let {
        name,
        addr,
        age,
        birth,
        sex
      } = config.params;
      _Users.push({
        name: name,
        addr: addr,
        age: age,
        birth: birth,
        sex: sex
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

  }
};
