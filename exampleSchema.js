export default {
  cond: {
    type: 'always_true',
  },
  fields: [{
    type: 'boolean',
    id: 'input1',
    label: 'input1',
  }, {
    type: 'string',
    id: 'input2',
    label: 'input2',
  }],
  children: [{
    cond: {
      type: 'and',
      conds: [{
        type: 'truthy',
        field_id: 'input1',
      }, {
        type: 'not_empty',
        field_id: 'input2',
      }],
    },
    fields: [{
      type: 'boolean',
      id: 'input3',
      label: 'input3',
    }],
    children: [{
      cond: {
        type: 'truthy',
        field_id: 'input3',
      },
      fields: [{
        type: 'string',
        id: 'input4',
        label: 'input4',
      }],
    }],
  }],
}
