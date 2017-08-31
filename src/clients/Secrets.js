// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import Client from '../Client';

export default class Secrets extends Client {
  constructor(options = {}) {
    super({
      ...options,
      baseUrl: 'https://secrets.taskcluster.net/v1',
      exchangePrefix: ''
    });
    
    this.set.entry = {type:'function',method:'put',route:'/secret/<name>',query:[],args:['name'],name:'set',stability:'stable',scopes:[['secrets:set:<name>']],input:true};
    this.remove.entry = {type:'function',method:'delete',route:'/secret/<name>',query:[],args:['name'],name:'remove',stability:'stable',scopes:[['secrets:set:<name>']]};
    this.get.entry = {type:'function',method:'get',route:'/secret/<name>',query:[],args:['name'],name:'get',stability:'stable',scopes:[['secrets:get:<name>']],output:true};
    this.list.entry = {type:'function',method:'get',route:'/secrets',query:[],args:[],name:'list',stability:'stable',output:true};
    this.ping.entry = {type:'function',method:'get',route:'/ping',query:[],args:[],name:'ping',stability:'stable'};
  }

  // Set the secret associated with some key.  If the secret already exists, it is
  // updated instead.
  set(...args) {
    this.validate(this.set.entry, args);
    return this.request(this.set.entry, args);
  }

  // Delete the secret associated with some key.
  remove(...args) {
    this.validate(this.remove.entry, args);
    return this.request(this.remove.entry, args);
  }

  // Read the secret associated with some key.  If the secret has recently
  // expired, the response code 410 is returned.  If the caller lacks the
  // scope necessary to get the secret, the call will fail with a 403 code
  // regardless of whether the secret exists.
  get(...args) {
    this.validate(this.get.entry, args);
    return this.request(this.get.entry, args);
  }

  // List the names of all secrets that you would have access to read. In
  // other words, secret name `<X>` will only be returned if a) a secret
  // with name `<X>` exists, and b) you posses the scope `secrets:get:<X>`.
  list(...args) {
    this.validate(this.list.entry, args);
    return this.request(this.list.entry, args);
  }

  // Respond without doing anything.
  // This endpoint is used to check that the service is up.
  ping(...args) {
    this.validate(this.ping.entry, args);
    return this.request(this.ping.entry, args);
  }
}
