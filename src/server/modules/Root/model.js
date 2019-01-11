const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class RootModel {
  constructor() {
  }

  setModel(name, schema) {
    this.Model = mongoose.model(name, schema);
  }

  getModel() {
    return this.Model;
  }

  setAutoIncrement(options, schema) {
    schema.plugin(this.autoIncrement.plugin, options.name);
    this.Model = this.connection.model(options.name, schema);
  }

  generatorObjectId() {
    return new mongoose.Types.ObjectId();
  }

  async findAndCount(conditions = {}, projection = '', options = {}) {
    
    const page = options['page'] || 1;
    const limit = options['limit'] || 10;
    const skip = (page - 1) * limit;
    options = {
      ...options,
      skip,
      limit
    } 
    

    const totalRecords = await this.Model.countDocuments(conditions);

    const data = await this.Model.find(conditions, projection, options);

    const totalPages = totalRecords === 0 ? 1 : Math.ceil(totalRecords / limit);

    return {
      totalRecords:  data.length === 0 ? 0 : totalRecords,
      totalPages: data.length === 0 ? 0 : totalPages,
      page: data.length === 0 ? 1 : page,
      limit: limit,
      results: data
    }
  }

 
  async find(conditions = {}, projection = '', options = {} ){
    return await this.Model.find(conditions, projection, options);
  }

  async findOne(conditions = {}, projection = '') {
    return await this.Model.findOne(conditions, projection);
  }

  async save(data) {
    const newDoc = new this.Model({
      ...data,
      date_created: this.beforeCreate()
    });
    return newDoc.save();
  }

  findByIdAndUpdate(id = '', data = {}, options = {
    new: true
  }) {
    return new Promise((resolve, reject) => {
      data.date_modify = this.beforeUpdate();
      this.Model.findByIdAndUpdate(id, data, options, (error, doc) => {
        error ? reject(error) : resolve(doc);
      });
    })
  }

  async findById(id = '', projection = '') {
    return await this.Model.findById(id, projection);
  }

  findByIdAndDelete(id = '', options = {}) {
    return new Promise((resolve, reject) => {
      this.Model.findByIdAndDelete(id, options, (err, doc) => {
        err ? reject(err) : resolve(doc);
      });
    })
  }

  remove(conditions = {}) {
    return new Promise((resolve, reject) => {
      this.Model.remove(conditions, (err) => {
        err ? reject(null) : resolve('Remove all docs');
      })
    })
  }

  async findOneAndUpdate(filter, update, options= {}){
    return await this.Model.findOneAndUpdate(filter, update, options);
  }

  beforeCreate() {
    return new Date().getTime();
  }
  beforeUpdate() {
    return new Date().getTime();
  }
}

module.exports = RootModel;
