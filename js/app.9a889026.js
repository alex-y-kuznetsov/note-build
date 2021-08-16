(function(t){function e(e){for(var r,i,a=e[0],l=e[1],c=e[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],r=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/note-build/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("router-view")],1)},s=[],i=o("2877"),a={},l=Object(i["a"])(a,n,s,!1,null,null,null),c=l.exports,u=o("8c4f"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Controls"),o("Notes")],1)},p=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notes",class:{notes_list:t.isListView}},[o("h1",{staticClass:"notes_title"},[o("span",[t._v("Notes")]),t.isFiltered?o("span",{staticClass:"notes_filtered"},[o("span",[t._v("Applied filters: ")]),t._l(t.appliedFilterTypes,(function(e,r){return o("span",{key:r,staticClass:"notes_filter"},[t._v(t._s(e))])}))],2):t._e()]),o("div",{staticClass:"notes_inner"},[t.isAddNoteShown?o("NewNoteItem"):t._e(),t._l(t.notesArray,(function(t){return o("NoteItem",{key:t.id,attrs:{id:t.id,title:t.title,text:t.text,date:t.date,marked:t.marked,favorite:t.favorite}})})),t.notesArray.length||t.isAddNoteShown?t._e():o("div",{staticClass:"notes_empty"},[t._v(" "+t._s(t.emptyNotesMessage)+" ")])],2),o("Stats")],1)},v=[],m=o("5530"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"note new_note"},[o("div",{staticClass:"note_header"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.title,expression:"newNote.title"}],staticClass:"note_title new_note_title",attrs:{placeholder:"Enter title of your note"},domProps:{value:t.newNote.title},on:{input:function(e){e.target.composing||t.$set(t.newNote,"title",e.target.value)}}})]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNote.text,expression:"newNote.text"}],staticClass:"note_text new_note_text",attrs:{placeholder:"Enter text of your note",rows:"4"},domProps:{value:t.newNote.text},on:{input:function(e){e.target.composing||t.$set(t.newNote,"text",e.target.value)}}}),t.validation?t._e():o("div",{staticClass:"validation_message"},[t._v(" Please fill all fields ")]),o("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.eraseNote.apply(null,arguments)}}},[t._v(" Erase ")]),o("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.createNote.apply(null,arguments)}}},[t._v(" Create ")])])},_=[],N={data:function(){return{newNote:{id:null,title:"",text:"",date:"",marked:!1,favorite:!1},validation:!0}},methods:{createNote:function(){var t=Date.now();this.newNote.date=new Date(t).toLocaleString(),this.newNote.id=(new Date).getTime(),this.newNote.title&&this.newNote.text?(this.$store.commit("createNewNote",this.newNote),this.$store.commit("saveNotesInStorage"),this.$store.commit("toggleMode","isAddNoteShown"),this.validation=!0):this.validation=!1},eraseNote:function(){this.newNote.title="",this.newNote.text=""}}},g=N,k=Object(i["a"])(g,h,_,!1,null,null,null),b=k.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"note"},[o("div",{staticClass:"note_header"},[o("h1",{staticClass:"note_title",attrs:{title:t.title}},[t._v(t._s(t.title))]),o("div",{staticClass:"note_status"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentNote.marked,expression:"currentNote.marked"}],staticClass:"note_input",attrs:{type:"checkbox",id:"noteMark_"+t.id},domProps:{checked:Array.isArray(t.currentNote.marked)?t._i(t.currentNote.marked,null)>-1:t.currentNote.marked},on:{change:[function(e){var o=t.currentNote.marked,r=e.target,n=!!r.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);r.checked?i<0&&t.$set(t.currentNote,"marked",o.concat([s])):i>-1&&t.$set(t.currentNote,"marked",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.currentNote,"marked",n)},t.saveNotesInStorage]}}),o("label",{staticClass:"note_icon note_mark",attrs:{for:"noteMark_"+t.id,title:"Mark"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.currentNote.favorite,expression:"currentNote.favorite"}],staticClass:"note_input",attrs:{type:"checkbox",id:"noteFav_"+t.id},domProps:{checked:Array.isArray(t.currentNote.favorite)?t._i(t.currentNote.favorite,null)>-1:t.currentNote.favorite},on:{change:[function(e){var o=t.currentNote.favorite,r=e.target,n=!!r.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);r.checked?i<0&&t.$set(t.currentNote,"favorite",o.concat([s])):i>-1&&t.$set(t.currentNote,"favorite",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.currentNote,"favorite",n)},t.saveNotesInStorage]}}),o("label",{staticClass:"note_icon note_fav",attrs:{for:"noteFav_"+t.id,title:"Favorite"}}),o("button",{staticClass:"note_icon note_delete",attrs:{title:"Delete"},on:{click:function(e){return e.stopPropagation(),t.deleteNote(t.id)}}})])]),o("div",{staticClass:"note_text"},[t._v(t._s(t.text))]),o("span",{staticClass:"note_date"},[t._v(t._s(t.date))])])},y=[],F=(o("a9e3"),o("7db0"),o("2f62")),C={props:{id:Number,title:String,text:String,date:String,marked:Boolean,favorite:Boolean},computed:Object(m["a"])(Object(m["a"])({},Object(F["b"])(["notes"])),{},{currentNote:function(){var t=this;return this.notes.find((function(e){return e.id===t.id}))}}),methods:{saveNotesInStorage:function(){this.$store.commit("saveNotesInStorage"),this.$store.commit("updateNotes")},deleteNote:function(t){this.$store.commit("deleteNote",t),this.$store.commit("saveNotesInStorage")}}},S=C,A=Object(i["a"])(S,w,y,!1,null,null,null),x=A.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"stats"},[o("span",{staticClass:"stats_item"},[t._v("Total: "+t._s(t.stats.total))]),o("span",{staticClass:"stats_item"},[t._v("Marked: "+t._s(t.stats.marked))]),o("span",{staticClass:"stats_item"},[t._v("Favorite: "+t._s(t.stats.favorite))])])},O=[],M=(o("4de4"),{computed:Object(m["a"])(Object(m["a"])({},Object(F["b"])(["notes"])),{},{stats:function(){return{total:this.notes.length,marked:this.notes.filter((function(t){return t.marked})).length,favorite:this.notes.filter((function(t){return t.favorite})).length}}})}),j=M,P=Object(i["a"])(j,$,O,!1,null,null,null),I=P.exports,E={components:{NewNoteItem:b,NoteItem:x,Stats:I},computed:Object(m["a"])(Object(m["a"])({},Object(F["b"])(["isAddNoteShown","isListView","appliedFilters","notes","filteredNotes"])),{},{emptyNotesMessage:function(){return this.isFiltered||this.notesArray.length||this.isAddNoteShown?"Nothing found":"No notes here. Try adding one."},isFiltered:function(){return this.appliedFilters.marked||this.appliedFilters.favorite},notesArray:function(){return this.isFiltered?this.filteredNotes:this.notes},appliedFilterTypes:function(){var t=[];for(var e in this.appliedFilters)!0===this.appliedFilters[e]&&t.push(e);return t}}),created:function(){this.$store.commit("updateNotes")}},T=E,L=Object(i["a"])(T,f,v,!1,null,null,null),V=L.exports,J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"controls"},[o("button",{staticClass:"btn",class:{btn_active:t.isAddNoteShown},on:{click:function(e){return e.stopPropagation(),t.toggleMode("isAddNoteShown")}}},[t._v(" Add Note ")]),o("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.clearNotesInStorage.apply(null,arguments)}}},[t._v(" Clear All ")]),o("button",{staticClass:"btn",on:{click:function(e){return e.stopPropagation(),t.toggleMarkAllNotes.apply(null,arguments)}}},[t._v(" "+t._s(t.isAllNotesMarked?"Unmark All":"Mark All")+" ")]),o("button",{staticClass:"btn list_switch",on:{click:function(e){return e.stopPropagation(),t.toggleMode("isListView")}}},[t._v(" "+t._s(t.isListView?"Tiles View":"List View")+" ")]),o("button",{staticClass:"btn",class:{btn_active:t.isFilterShown},on:{click:function(e){return e.stopPropagation(),t.toggleMode("isFilterShown")}}},[t._v(" Show Filters ")]),o("transition",{attrs:{name:"slide-fade"}},[t.isFilterShown?o("div",{staticClass:"controls_filter"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.appliedFilters.marked,expression:"appliedFilters.marked"}],staticClass:"controls_input",attrs:{type:"checkbox",id:"controlsFilterMarked"},domProps:{checked:Array.isArray(t.appliedFilters.marked)?t._i(t.appliedFilters.marked,null)>-1:t.appliedFilters.marked},on:{change:[function(e){var o=t.appliedFilters.marked,r=e.target,n=!!r.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);r.checked?i<0&&t.$set(t.appliedFilters,"marked",o.concat([s])):i>-1&&t.$set(t.appliedFilters,"marked",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.appliedFilters,"marked",n)},t.applyCurrentFilter]}}),o("label",{staticClass:"controls_label",attrs:{for:"controlsFilterMarked"}},[t._v("Marked")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.appliedFilters.favorite,expression:"appliedFilters.favorite"}],staticClass:"controls_input",attrs:{type:"checkbox",id:"controlsFilterFavorite"},domProps:{checked:Array.isArray(t.appliedFilters.favorite)?t._i(t.appliedFilters.favorite,null)>-1:t.appliedFilters.favorite},on:{change:[function(e){var o=t.appliedFilters.favorite,r=e.target,n=!!r.checked;if(Array.isArray(o)){var s=null,i=t._i(o,s);r.checked?i<0&&t.$set(t.appliedFilters,"favorite",o.concat([s])):i>-1&&t.$set(t.appliedFilters,"favorite",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.appliedFilters,"favorite",n)},t.applyCurrentFilter]}}),o("label",{staticClass:"controls_label",attrs:{for:"controlsFilterFavorite"}},[t._v("Favorite")])]):t._e()])],1)},D=[],H={computed:Object(m["a"])({},Object(F["b"])(["isAddNoteShown","isListView","isAllNotesMarked","isFilterShown","appliedFilters"])),methods:{toggleMode:function(t){this.$store.commit("toggleMode",t)},applyCurrentFilter:function(){this.$store.commit("applyFilters")},clearNotesInStorage:function(){this.$store.commit("clearNotes"),localStorage.removeItem("notes")},toggleMarkAllNotes:function(){this.$store.commit("toggleMarkAllNotes"),this.$store.commit("saveNotesInStorage")}}},B=H,R=Object(i["a"])(B,J,D,!1,null,null,null),U=R.exports,q={name:"Home",components:{Notes:V,Controls:U}},z=q,G=Object(i["a"])(z,d,p,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"not_found"},[o("div",{staticClass:"not_found_inner"},[o("div",[t._v("This page probably never existed")]),o("router-link",{staticClass:"btn not_found_back",attrs:{to:{name:"Home"}}},[t._v("Return to the one that did")])],1)])},W=[],X={},Y=X,Z=Object(i["a"])(Y,Q,W,!1,null,null,null),tt=Z.exports;r["a"].use(u["a"]);var et=[{path:"/",name:"Home",component:K},{path:"/404",name:"NotFound",component:tt},{path:"*",redirect:"/404"}],ot=new u["a"]({routes:et}),rt=ot,nt=(o("99af"),o("159b"),o("a434"),function(t){for(var e=t.concat(),o=0;o<e.length;o++)for(var r=o+1;r<e.length;++r)e[o]===e[r]&&e.splice(r--,1);return e});r["a"].use(F["a"]);var st=new F["a"].Store({state:{isAddNoteShown:!1,isListView:!1,isAllNotesMarked:!1,isFilterShown:!1,appliedFilters:{marked:!1,favorite:!1},notes:[],filteredNotes:[]},mutations:{toggleMode:function(t,e){t[e]=!t[e]},applyFilters:function(t){t.filteredNotes=[];var e=function(e){if(!0===t.appliedFilters[e]){var o=t.notes.filter((function(t){return!0===t[e]}));t.filteredNotes=nt(t.filteredNotes.concat(o))}};for(var o in t.appliedFilters)e(o)},toggleMarkAllNotes:function(t){t.notes.some((function(t){return!1===t.marked}))?(t.notes.forEach((function(t){t.marked=!0})),t.isAllNotesMarked=!0):(t.notes.forEach((function(t){t.marked=!1})),t.isAllNotesMarked=!1)},createNewNote:function(t,e){t.notes.unshift(e)},deleteNote:function(t,e){t.notes.forEach((function(o,r){o.id===e&&t.notes.splice(r,1)}))},updateNotes:function(t){localStorage.notes?t.notes=JSON.parse(localStorage.notes):t.notes=[],t.notes.some((function(t){return!1===t.marked}))?t.isAllNotesMarked=!1:t.isAllNotesMarked=!0},clearNotes:function(t){t.notes=[]},saveNotesInStorage:function(t){localStorage.notes?localStorage.notes=JSON.stringify(t.notes):localStorage.setItem("notes",JSON.stringify(t.notes))}},actions:{},modules:{}});o("70cc");r["a"].config.productionTip=!1,new r["a"]({router:rt,store:st,render:function(t){return t(c)}}).$mount("#app")},"70cc":function(t,e,o){}});
//# sourceMappingURL=app.9a889026.js.map