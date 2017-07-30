export const exampleSchema = {
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

export const exampleLabelsGif = {
  cond: {
    type: 'always_true'
  },
  fields: [{
    type: 'boolean',
    label: 'Example boolean'
  }, {
    type: 'options',
    label: 'Example options',
    options: [{
      label: 'Option #1'
    }, {
      label: 'Option #2'
    }, {
      label: 'Option #3'
    }],
  }],
  children: [{
    cond: {
      type: 'and',
      conds: [{
        type: 'truthy',
        field_id: 'Example boolean'
      }, {
        type: 'equals',
        field_id: 'Example options',
        field_value: 'Option #2'
      }],
    },
    fields: [{
      type: 'string',
      label: 'Example string'
    }],
    children: [{
      cond: {
        type: 'equals',
        field_id: 'Example string',
        field_value: 'Expected value',
      },
      fields: [{
        type: 'date',
        label: 'Example date',
      }],
    }],
  }],
}

export const conditionalAllFields = {
  cond: {
    type: 'always_true'
  },
  fields: [{
    type: 'boolean',
    label: 'Example boolean',
  }],
  children: [{
    cond: {
      type: 'truthy',
      field_id: 'Example boolean',
    },
    fields: [{
      type: 'string',
      label: 'Example string',
    }],
  }],
}

export const exampleallFields = {
  cond: {
    type: 'always_true'
  },
  fields: [{
    type: 'boolean',
    label: 'Example boolean'
  }, {
    type: 'boolean',
    label: 'Example boolean2'
  }, {
    type: 'string',
    label: 'Example string'
  }, {
    type: 'options',
    label: 'Example options',
    options: [{
      label: 'Option #1',
    }, {
      label: 'Option #2',
    }],
  }, {
    type: 'string',
    label: 'Example string2'
  }],
}
