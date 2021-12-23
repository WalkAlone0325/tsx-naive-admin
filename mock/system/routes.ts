import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/getRouters',
    method: 'get',
    response: () => {
      return {
        msg: '操作成功',
        code: 200,
        data: [
          {
            name: 'Basic',
            path: '/basic',
            hidden: false,
            redirect: 'noRedirect',
            component: 'Layout',
            alwaysShow: true,
            meta: {
              title: '基础信息',
              icon: 'tool',
              noCache: false
            },
            children: [
              {
                name: 'Unit',
                path: 'unit',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '单位管理',
                  icon: 'date-range',
                  noCache: false
                },
                children: [
                  {
                    name: 'Manufacturer',
                    path: 'manufacturer',
                    hidden: false,
                    component: 'basic/unit/manufacturer/index',
                    meta: {
                      title: '生产厂家',
                      icon: 'icon',
                      noCache: false
                    }
                  },
                  {
                    name: 'Supplier',
                    path: 'supplier',
                    hidden: false,
                    component: 'basic/unit/supplier/index',
                    meta: {
                      title: '供应商',
                      icon: 'message',
                      noCache: false
                    }
                  },
                  {
                    name: 'Distributor',
                    path: 'distributor',
                    hidden: false,
                    component: 'basic/unit/distributor/index',
                    meta: {
                      title: '经销商',
                      icon: 'table',
                      noCache: false
                    }
                  },
                  {
                    name: 'Hospital',
                    path: 'hospital',
                    hidden: false,
                    component: 'basic/unit/hospital/index',
                    meta: {
                      title: '医院管理',
                      icon: 'druid',
                      noCache: false
                    }
                  },
                  {
                    name: 'Registration',
                    path: 'registration',
                    hidden: true,
                    component: 'basic/unit/registration/index',
                    meta: {
                      title: '注册证管理',
                      icon: 'tab',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Storehouse',
                path: 'storehouse',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '仓库管理',
                  icon: 'post',
                  noCache: false
                },
                children: [
                  {
                    name: 'Storehouse',
                    path: 'storehouse',
                    hidden: false,
                    component: 'basic/warehouse/storehouse/index',
                    meta: {
                      title: '仓库管理',
                      icon: 'theme',
                      noCache: false
                    }
                  },
                  {
                    name: 'Position',
                    path: 'position',
                    hidden: false,
                    component: 'basic/warehouse/position/index',
                    meta: {
                      title: '库位管理',
                      icon: 'druid',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'ProductManager',
                path: 'productManager',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '产品管理',
                  icon: 'password',
                  noCache: false
                },
                children: [
                  {
                    name: 'Product',
                    path: 'product',
                    hidden: false,
                    component: 'basic/productManage/product/index',
                    meta: {
                      title: '产品',
                      icon: 'clipboard',
                      noCache: false
                    }
                  },
                  {
                    name: 'Apparatus',
                    path: 'apparatus',
                    hidden: false,
                    component: 'basic/productManage/apparatus/index',
                    meta: {
                      title: '器械',
                      icon: 'search',
                      noCache: false
                    }
                  },
                  {
                    name: 'ProductGroup',
                    path: 'productGroup',
                    hidden: false,
                    component: 'basic/productManage/productGroup/index',
                    meta: {
                      title: '器械组配',
                      icon: 'dict',
                      noCache: true
                    }
                  },
                  {
                    name: 'GroupDetail',
                    path: 'groupDetail',
                    hidden: true,
                    component: 'basic/productManage/groupDetail/index',
                    meta: {
                      title: '组配明细',
                      icon: 'date-range',
                      noCache: true
                    }
                  },
                  {
                    name: 'CommonName',
                    path: 'commonName',
                    hidden: false,
                    component: 'basic/productManage/commonName/index',
                    meta: {
                      title: '通用名称',
                      icon: 'nested',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Cabinet',
                path: 'cabinet',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '智能柜管理',
                  icon: 'druid',
                  noCache: false
                },
                children: [
                  {
                    name: 'Child',
                    path: 'child',
                    hidden: false,
                    component: 'basic/cabinet/child/index',
                    meta: {
                      title: '子柜管理',
                      icon: 'button',
                      noCache: false
                    }
                  },
                  {
                    name: 'CabinetPosition',
                    path: 'cabinetPosition',
                    hidden: false,
                    component: 'basic/cabinet/position/index',
                    meta: {
                      title: '库位管理',
                      icon: 'dict',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Doctor',
                path: 'doctor',
                hidden: false,
                component: 'basic/doctor/index',
                meta: {
                  title: '医生管理',
                  icon: 'cascader',
                  noCache: false
                }
              },
              {
                name: 'Patient',
                path: 'patient',
                hidden: false,
                component: 'basic/patient/index',
                meta: {
                  title: '病人管理',
                  icon: 'client',
                  noCache: false
                }
              }
            ]
          },
          {
            name: 'Business',
            path: '/business',
            hidden: false,
            redirect: 'noRedirect',
            component: 'Layout',
            alwaysShow: true,
            meta: {
              title: '业务功能',
              icon: 'component',
              noCache: false
            },
            children: [
              {
                name: 'Surgery',
                path: 'surgery',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '手术管理',
                  icon: 'druid',
                  noCache: false
                },
                children: [
                  {
                    name: 'SurgeryScheme',
                    path: 'surgeryScheme',
                    hidden: false,
                    component: 'business/surgery/surgeryScheme/index',
                    meta: {
                      title: '手术方案',
                      icon: 'post',
                      noCache: false
                    }
                  },
                  {
                    name: 'SurgeryConfig',
                    path: 'surgeryConfig',
                    hidden: false,
                    component: 'business/surgery/surgeryConfig/index',
                    meta: {
                      title: '手术配台',
                      icon: 'chart',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Store',
                path: 'store',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '库存管理',
                  icon: 'cascader',
                  noCache: false
                },
                children: [
                  {
                    name: 'AllStore',
                    path: 'allStore',
                    hidden: false,
                    component: 'business/store/allStore/index',
                    meta: {
                      title: '全部库存',
                      icon: 'druid',
                      noCache: false
                    }
                  },
                  {
                    name: 'StoreInventory',
                    path: 'storeInventory',
                    hidden: false,
                    component: 'business/store/storeInventory/index',
                    meta: {
                      title: '仓库库存',
                      icon: 'message',
                      noCache: false
                    }
                  },
                  {
                    name: 'Bulkpackage',
                    path: 'bulkpackage',
                    hidden: false,
                    component: 'business/store/bulkpackage/index',
                    meta: {
                      title: '散件组包',
                      icon: 'client',
                      noCache: true
                    }
                  },
                  {
                    name: 'InStore',
                    path: 'inStore',
                    hidden: false,
                    component: 'business/store/inStore/index',
                    meta: {
                      title: '入库管理',
                      icon: 'dict',
                      noCache: false
                    }
                  },
                  {
                    name: 'OutStore',
                    path: 'outStore',
                    hidden: false,
                    component: 'business/store/outStore/index',
                    meta: {
                      title: '出库管理',
                      icon: 'post',
                      noCache: false
                    }
                  },
                  {
                    name: 'Allocate',
                    path: 'allocate',
                    hidden: false,
                    component: 'business/store/allocate/index',
                    meta: {
                      title: '调拨管理',
                      icon: 'time-range',
                      noCache: false
                    }
                  },
                  {
                    name: 'Record',
                    path: 'record',
                    hidden: false,
                    component: 'business/store/record/index',
                    meta: {
                      title: '库存记录',
                      icon: 'build',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'SalaryBill',
                path: 'salaryBill',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '工资管理',
                  icon: 'money',
                  noCache: false
                },
                children: [
                  {
                    name: 'SalaryBill',
                    path: 'salaryBill',
                    hidden: false,
                    component: 'business/salaryBill/index',
                    meta: {
                      title: '工资单',
                      icon: 'money',
                      noCache: false
                    }
                  },
                  {
                    name: 'Business',
                    path: 'business',
                    hidden: false,
                    component: 'business/salaryBill/wageDictionary',
                    meta: {
                      title: '工资字典',
                      icon: 'dict',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Sale',
                path: 'sale',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '销售管理',
                  icon: 'validCode',
                  noCache: false
                },
                children: [
                  {
                    name: 'SaleOrder',
                    path: 'saleOrder',
                    hidden: false,
                    component: 'business/sale/saleOrder/index',
                    meta: {
                      title: '销售订单',
                      icon: 'money',
                      noCache: false
                    }
                  },
                  {
                    name: 'SalesSummary',
                    path: 'salesSummary',
                    hidden: false,
                    component: 'business/sale/salesSummary/index',
                    meta: {
                      title: '销售汇总',
                      icon: 'skill',
                      noCache: false
                    }
                  },
                  {
                    name: 'SalesReturn',
                    path: 'salesReturn',
                    hidden: false,
                    component: 'business/sale/salesReturns/index',
                    meta: {
                      title: '销售退货',
                      icon: 'documentation',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Management',
                path: 'management',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '借货管理',
                  icon: 'cascader',
                  noCache: false
                },
                children: [
                  {
                    name: 'InBorrow',
                    path: 'inBorrow',
                    hidden: false,
                    component: 'business/borrow/inBorrow/index.vue',
                    meta: {
                      title: '借入订单',
                      icon: 'cascader',
                      noCache: false
                    }
                  },
                  {
                    name: 'OutBorrow',
                    path: 'outBorrow',
                    hidden: false,
                    component: 'business/borrow/outBorrow/index.vue',
                    meta: {
                      title: '借出订单',
                      icon: 'bug',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'Bill',
                path: 'bill',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '账单管理',
                  icon: 'build',
                  noCache: false
                },
                children: [
                  {
                    name: 'Receivables',
                    path: 'receivables',
                    hidden: false,
                    component: 'business/bill/receivables/index',
                    meta: {
                      title: '应收账款',
                      icon: 'dict',
                      noCache: false
                    }
                  },
                  {
                    name: 'Cope',
                    path: 'cope',
                    hidden: false,
                    component: 'business/bill/cope/index',
                    meta: {
                      title: '应付账款',
                      icon: 'job',
                      noCache: false
                    }
                  }
                ]
              },
              {
                name: 'SalaryBill/salaryDetail',
                path: 'salaryBill/salaryDetail',
                hidden: true,
                component: 'business/salaryBill/salaryBillDetail/index',
                meta: {
                  title: '工资详情',
                  icon: 'money',
                  noCache: false
                }
              },
              {
                name: 'Procurement',
                path: 'procurement',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '采购管理',
                  icon: 'row',
                  noCache: false
                },
                children: [
                  {
                    name: 'Order',
                    path: 'order',
                    hidden: false,
                    component: 'business/procurement/order/index',
                    meta: {
                      title: '采购订单',
                      icon: 'log',
                      noCache: false
                    }
                  },
                  {
                    name: 'PrePurchase',
                    path: 'prePurchase',
                    hidden: false,
                    component: 'business/procurement/prePurchase/index',
                    meta: {
                      title: '预采购',
                      icon: 'time',
                      noCache: false
                    }
                  },
                  {
                    name: 'PurchaseReturns',
                    path: 'PurchaseReturns',
                    hidden: false,
                    component: 'business/procurement/purchaseReturns/index',
                    meta: {
                      title: '购入退货',
                      icon: 'documentation',
                      noCache: false
                    }
                  }
                ]
              }
            ]
          },
          {
            name: 'System',
            path: '/system',
            hidden: false,
            redirect: 'noRedirect',
            component: 'Layout',
            alwaysShow: true,
            meta: {
              title: '系统管理',
              icon: 'system',
              noCache: false
            },
            children: [
              {
                name: 'User',
                path: 'user',
                hidden: false,
                component: 'system/user/index',
                meta: {
                  title: '用户管理',
                  icon: 'user',
                  noCache: false
                }
              },
              {
                name: 'Role',
                path: 'role',
                hidden: false,
                component: 'system/role/index',
                meta: {
                  title: '角色管理',
                  icon: 'peoples',
                  noCache: false
                }
              },
              {
                name: 'Menu',
                path: 'menu',
                hidden: false,
                component: 'system/menu/index',
                meta: {
                  title: '菜单管理',
                  icon: 'tree-table',
                  noCache: false
                }
              },
              {
                name: 'Dept',
                path: 'dept',
                hidden: false,
                component: 'system/dept/index',
                meta: {
                  title: '部门管理',
                  icon: 'tree',
                  noCache: false
                }
              },
              {
                name: 'Post',
                path: 'post',
                hidden: false,
                component: 'system/post/index',
                meta: {
                  title: '岗位管理',
                  icon: 'post',
                  noCache: false
                }
              },
              {
                name: 'Dict',
                path: 'dict',
                hidden: false,
                component: 'system/dict/index',
                meta: {
                  title: '字典管理',
                  icon: 'dict',
                  noCache: false
                }
              },
              {
                name: 'Config',
                path: 'config',
                hidden: false,
                component: 'system/config/index',
                meta: {
                  title: '参数设置',
                  icon: 'edit',
                  noCache: false
                }
              },
              {
                name: 'Personal',
                path: 'personal',
                hidden: false,
                component: 'system/personal/index',
                meta: {
                  title: '人员档案',
                  icon: 'education',
                  noCache: false
                }
              },
              {
                name: 'Notice',
                path: 'notice',
                hidden: false,
                component: 'system/notice/index',
                meta: {
                  title: '通知公告',
                  icon: 'message',
                  noCache: false
                }
              },
              {
                name: 'Log',
                path: 'log',
                hidden: false,
                redirect: 'noRedirect',
                component: 'ParentView',
                alwaysShow: true,
                meta: {
                  title: '日志管理',
                  icon: 'log',
                  noCache: false
                },
                children: [
                  {
                    name: 'Operlog',
                    path: 'operlog',
                    hidden: false,
                    component: 'system/operlog/index',
                    meta: {
                      title: '操作日志',
                      icon: 'form',
                      noCache: false
                    }
                  },
                  {
                    name: 'Logininfor',
                    path: 'logininfor',
                    hidden: false,
                    component: 'system/logininfor/index',
                    meta: {
                      title: '登录日志',
                      icon: 'logininfor',
                      noCache: false
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
] as MockMethod[]
