// DOM
const calendar = document.querySelector('.calendar');

new Calendar({
  element: calendar,
  // defaultDate: new Date(1999, 9, 9)
});

window.onload = () => {
  const app = new Vue({
      el: '#app',
      data: {
          list: ['门店1', '门店2', '门店3'],
          list3: ['按技能分组','按岗位分组','按人员分组']

      },
      methods: {
          select(item) {
              // alert(item);
          }
      },
      components: {
          'select-list': {
              template: '#select-list',
              props: {
                  list: {
                      type: Array,
                      default: []
                  },
                  default: {
                      type: String,
                      default: '请选择'
                  }
              },
              data() {
                  return {
                      selectItem: this.default,
                      showSelect: false,
                      selectListHeight: 0
                  }
              },
              mounted() {
                  selectListContent = this.$refs.selectListContent;
                  this.selectListHeight = selectListContent.offsetHeight;
                  selectListContent.style.height = '0';
              },
              methods: {
                  showSelectList() {
                      this.showSelect = !this.showSelect;
                      this.$refs.selectListContent.style.height = this.showSelect ? this.selectListHeight + 'px' : '0';
                  },
                  hideSelectList() {
                      this.showSelect = false;
                      this.$refs.selectListContent.style.height = '0';
                  },
                  select(item) {
                      this.selectItem = item;
                      this.$emit('select', item);
                  }
              }
          }
      }
  })
  const app2 = new Vue({
    el: '#app2',
    data: {
        list: ['门店1', '门店2', '门店3'],
        list2: ['门店经理','经理','小组长','店员'],
        list3: ['按技能分组','按岗位分组','按人员分组']

    },
    methods: {
        select2(item2) {
            // alert(item);
        }
    },
    components: {
        'select-list2': {
            template: '#select-list2',
            props: {
                list: {
                    type: Array,
                    default: []
                },
                default: {
                    type: String,
                    default: '请选择'
                }
            },
            data() {
                return {
                    selectItem2: this.default,
                    showSelect2: false,
                    selectListHeight2: 0
                }
            },
            mounted() {
                selectListContent2 = this.$refs.selectListContent2;
                this.selectListHeight2 = selectListContent2.offsetHeight;
                selectListContent2.style.height = '0';
            },
            methods: {
                showSelectList2() {
                    this.showSelect2 = !this.showSelect2;
                    this.$refs.selectListContent2.style.height = this.showSelect2 ? this.selectListHeight2 + 'px' : '0';
                },
                hideSelectList2() {
                    this.showSelect2 = false;
                    this.$refs.selectListContent2.style.height = '0';
                },
                select2(item2) {
                    this.selectItem2 = item2;
                    this.$emit('select2', item2);
                }
            }
        }
    }
})
const app3 = new Vue({
    el: '#app3',
    data: {
        list: ['门店1', '门店2', '门店3'],
        list2: ['门店经理','经理','小组长','店员'],
        list3: ['按技能分组','按岗位分组','按人员分组']

    },
    methods: {
        select3(item3) {
            // alert(item);
        }
    },
    components: {
        'select-list3': {
            template: '#select-list3',
            props: {
                list: {
                    type: Array,
                    default: []
                },
                default: {
                    type: String,
                    default: '请选择'
                }
            },
            data() {
                return {
                    selectItem3: this.default,
                    showSelect3: false,
                    selectListHeight3: 0
                }
            },
            mounted() {
                selectListContent3 = this.$refs.selectListContent3;
                this.selectListHeight3 = selectListContent3.offsetHeight;
                selectListContent3.style.height = '0';
            },
            methods: {
                showSelectList3() {
                    this.showSelect3 = !this.showSelect3;
                    this.$refs.selectListContent3.style.height = this.showSelect3 ? this.selectListHeight3 + 'px' : '0';
                },
                hideSelectList3() {
                    this.showSelect3 = false;
                    this.$refs.selectListContent3.style.height = '0';
                },
                select3(item3) {
                    this.selectItem3 = item3;
                    this.$emit('select3', item3);
                }
            }
        }
    }
})
const app4 = new Vue({
    el: '#app4',
    data: {
        list: ['门店1', '门店2', '门店3'],
        list2: ['门店经理','经理','小组长','店员'],
        list3: ['按技能分组','按岗位分组','按人员分组']

    },
    methods: {
        select4(item4) {
            // alert(item);
        }
    },
    components: {
        'select-list4': {
            template: '#select-list4',
            props: {
                list: {
                    type: Array,
                    default: []
                },
                default: {
                    type: String,
                    default: '请选择'
                }
            },
            data() {
                return {
                    selectItem4: this.default,
                    showSelect4: false,
                    selectListHeight4: 0
                }
            },
            mounted() {
                selectListContent4 = this.$refs.selectListContent4;
                this.selectListHeight4 = selectListContent4.offsetHeight;
                selectListContent4.style.height = '0';
            },
            methods: {
                showSelectList4() {
                    this.showSelect4 = !this.showSelect4;
                    this.$refs.selectListContent4.style.height = this.showSelect4 ? this.selectListHeight4 + 'px' : '0';
                },
                hideSelectList4() {
                    this.showSelect4 = false;
                    this.$refs.selectListContent4.style.height = '0';
                },
                select4(item4) {
                    this.selectItem4 = item4;
                    this.$emit('select4', item4);
                }
            }
        }
    }
})
const app5 = new Vue({
    el: '#app5',
    data: {
        list: ['门店1', '门店2', '门店3'],
        list2: ['门店经理','经理','小组长','店员'],
        list3: ['按技能分组','按岗位分组','按人员分组']

    },
    methods: {
        select5(item5) {
            // alert(item);
        }
    },
    components: {
        'select-list5': {
            template: '#select-list5',
            props: {
                list: {
                    type: Array,
                    default: []
                },
                default: {
                    type: String,
                    default: '请选择'
                }
            },
            data() {
                return {
                    selectItem5: this.default,
                    showSelect5: false,
                    selectListHeight5: 0
                }
            },
            mounted() {
                selectListContent5 = this.$refs.selectListContent5;
                this.selectListHeight5 = selectListContent5.offsetHeight;
                selectListContent5.style.height = '0';
            },
            methods: {
                showSelectList5() {
                    this.showSelect5 = !this.showSelect5;
                    this.$refs.selectListContent5.style.height = this.showSelect5 ? this.selectListHeight5 + 'px' : '0';
                },
                hideSelectList5() {
                    this.showSelect5 = false;
                    this.$refs.selectListContent5.style.height = '0';
                },
                select5(item5) {
                    this.selectItem5 = item5;
                    this.$emit('select5', item5);
                }
            }
        }
    }
})
}