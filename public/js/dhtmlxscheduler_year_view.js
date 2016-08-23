/*
@license
dhtmlxScheduler v.4.3.25 Professional

This software can be used only as part of dhtmlx.com site.
You are not allowed to use it on any other site

(c) Dinamenta, UAB.


*/
Scheduler.plugin(function(e){e.config.year_x=4,e.config.year_y=3,e.xy.year_top=0,e.templates.year_date=function(t){return e.date.date_to_str(e.locale.labels.year_tab+" %Y")(t)},e.templates.year_month=e.date.date_to_str("%F"),e.templates.year_scale_date=e.date.date_to_str("%D"),e.templates.year_tooltip=function(e,t,a){return a.text},function(){var t=function(){return"year"==e._mode};e.dblclick_dhx_month_head=function(e){if(t()){var a=e.target||e.srcElement;if(-1!=a.parentNode.className.indexOf("dhx_before")||-1!=a.parentNode.className.indexOf("dhx_after"))return!1;
var n=this.templates.xml_date(a.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("date"));n.setDate(parseInt(a.innerHTML,10));var i=this.date.add(n,1,"day");!this.config.readonly&&this.config.dblclick_create&&this.addEventNow(n.valueOf(),i.valueOf(),e)}};var a=e.changeEventId;e.changeEventId=function(){a.apply(this,arguments),t()&&this.year_view(!0)};var n=e.render_data,i=e.date.date_to_str("%Y/%m/%d"),r=e.date.str_to_date("%Y/%m/%d");e.render_data=function(e){if(!t())return n.apply(this,arguments);
for(var a=0;a<e.length;a++)this._year_render_event(e[a])};var d=e.clear_view;e.clear_view=function(){if(!t())return d.apply(this,arguments);var a=e._year_marked_cells,n=null;for(var i in a)a.hasOwnProperty(i)&&(n=a[i],n.className="dhx_month_head",n.setAttribute("date",""));e._year_marked_cells={}},e._hideToolTip=function(){this._tooltip&&(this._tooltip.style.display="none",this._tooltip.date=new Date(9999,1,1))},e._showToolTip=function(t,a,n,i){if(this._tooltip){if(this._tooltip.date.valueOf()==t.valueOf())return;
this._tooltip.innerHTML=""}else{var r=this._tooltip=document.createElement("DIV");r.className="dhx_year_tooltip",document.body.appendChild(r),r.onclick=e._click.dhx_cal_data}for(var d=this.getEvents(t,this.date.add(t,1,"day")),o="",l=0;l<d.length;l++){var _=d[l];if(this.filter_event(_.id,_)){var s=_.color?"background:"+_.color+";":"",c=_.textColor?"color:"+_.textColor+";":"";o+="<div class='dhx_tooltip_line' style='"+s+c+"' event_id='"+d[l].id+"'>",o+="<div class='dhx_tooltip_date' style='"+s+c+"'>"+(d[l]._timed?this.templates.event_date(d[l].start_date):"")+"</div>",
o+="<div class='dhx_event_icon icon_details'>&nbsp;</div>",o+=this.templates.year_tooltip(d[l].start_date,d[l].end_date,d[l])+"</div>"}}this._tooltip.style.display="",this._tooltip.style.top="0px",document.body.offsetWidth-a.left-this._tooltip.offsetWidth<0?this._tooltip.style.left=a.left-this._tooltip.offsetWidth+"px":this._tooltip.style.left=a.left+i.offsetWidth+"px",this._tooltip.date=t,this._tooltip.innerHTML=o,document.body.offsetHeight-a.top-this._tooltip.offsetHeight<0?this._tooltip.style.top=a.top-this._tooltip.offsetHeight+i.offsetHeight+"px":this._tooltip.style.top=a.top+"px";
},e._year_view_tooltip_handler=function(a){if(t()){var a=a||event,n=a.target||a.srcElement;"a"==n.tagName.toLowerCase()&&(n=n.parentNode),-1!=(n.className||"").indexOf("dhx_year_event")?e._showToolTip(r(n.getAttribute("date")),getOffset(n),a,n):e._hideToolTip()}},e._init_year_tooltip=function(){e._detachDomEvent(e._els.dhx_cal_data[0],"mouseover",e._year_view_tooltip_handler),dhtmlxEvent(e._els.dhx_cal_data[0],"mouseover",e._year_view_tooltip_handler)},e.attachEvent("onSchedulerResize",function(){
return t()?(this.year_view(!0),!1):!0}),e._get_year_cell=function(e){var t=e.getMonth()+12*(e.getFullYear()-this._min_date.getFullYear())-this.week_starts._month,a=this._els.dhx_cal_data[0].childNodes[t],e=this.week_starts[t]+e.getDate()-1;return a.childNodes[2].firstChild.rows[Math.floor(e/7)].cells[e%7].firstChild},e._year_marked_cells={},e._mark_year_date=function(t,a){var n=i(t),r=this._get_year_cell(t),d=this.templates.event_class(a.start_date,a.end_date,a);e._year_marked_cells[n]||(r.className="dhx_month_head dhx_year_event",
r.setAttribute("date",n),e._year_marked_cells[n]=r),r.className+=d?" "+d:""},e._unmark_year_date=function(e){this._get_year_cell(e).className="dhx_month_head"},e._year_render_event=function(e){var t=e.start_date;for(t=t.valueOf()<this._min_date.valueOf()?this._min_date:this.date.date_part(new Date(t));t<e.end_date;)if(this._mark_year_date(t,e),t=this.date.add(t,1,"day"),t.valueOf()>=this._max_date.valueOf())return},e.year_view=function(t){var a;if(t&&(a=e.xy.scale_height,e.xy.scale_height=-1),e._els.dhx_cal_header[0].style.display=t?"none":"",
e.set_sizes(),t&&(e.xy.scale_height=a),e._table_view=t,!this._load_mode||!this._load())if(t){if(e._init_year_tooltip(),e._reset_year_scale(),e._load_mode&&e._load())return void(e._render_wait=!0);e.render_view_data()}else e._hideToolTip()},e._reset_year_scale=function(){this._cols=[],this._colsS={};var t=[],a=this._els.dhx_cal_data[0],n=this.config;a.scrollTop=0,a.innerHTML="";var i=Math.floor(parseInt(a.style.width)/n.year_x),r=Math.floor((parseInt(a.style.height)-e.xy.year_top)/n.year_y);190>r&&(r=190,
i=Math.floor((parseInt(a.style.width)-e.xy.scroll_width)/n.year_x));for(var d=i-11,o=0,l=document.createElement("div"),_=this.date.week_start(e._currentDate()),s=0;7>s;s++)this._cols[s]=Math.floor(d/(7-s)),this._render_x_header(s,o,_,l),_=this.date.add(_,1,"day"),d-=this._cols[s],o+=this._cols[s];l.lastChild.className+=" dhx_scale_bar_last";for(var c=this.date[this._mode+"_start"](this.date.copy(this._date)),h=c,u=null,s=0;s<n.year_y;s++)for(var p=0;p<n.year_x;p++){u=document.createElement("DIV"),
u.style.cssText="position:absolute;",u.setAttribute("date",this.templates.xml_format(c)),u.innerHTML="<div class='dhx_year_month'></div><div class='dhx_year_week'>"+l.innerHTML+"</div><div class='dhx_year_body'></div>",u.childNodes[0].innerHTML=this.templates.year_month(c);for(var v=this.date.week_start(c),m=this._reset_month_scale(u.childNodes[2],c,v),g=u.childNodes[2].firstChild.rows,f=g.length;6>f;f++){g[0].parentNode.appendChild(g[0].cloneNode(!0));for(var y=0,b=g[f].childNodes.length;b>y;y++)g[f].childNodes[y].className="dhx_after",
g[f].childNodes[y].firstChild.innerHTML=e.templates.month_day(m),m=e.date.add(m,1,"day")}a.appendChild(u),u.childNodes[1].style.height=u.childNodes[1].childNodes[0].offsetHeight+"px";var x=Math.round((r-190)/2);u.style.marginTop=x+"px",this.set_xy(u,i-10,r-x-10,i*p+5,r*s+5+e.xy.year_top),t[s*n.year_x+p]=(c.getDay()-(this.config.start_on_monday?1:0)+7)%7,c=this.date.add(c,1,"month")}this._els.dhx_cal_date[0].innerHTML=this.templates[this._mode+"_date"](h,c,this._mode),this.week_starts=t,t._month=h.getMonth(),
this._min_date=h,this._max_date=c};var o=e.getActionData;e.getActionData=function(a){if(!t())return o.apply(e,arguments);var n=a?a.target:event.srcElement,i=e._get_year_month_date(n),r=e._get_year_month_cell(n),d=e._get_year_day_indexes(r);return d&&i?(i=e.date.add(i,d.week,"week"),i=e.date.add(i,d.day,"day")):i=null,{date:i,section:null}},e._get_year_day_indexes=function(t){var a=e._get_year_el_node(t,this._locate_year_month_table);if(!a)return null;for(var n=0,i=0,n=0,r=a.rows.length;r>n;n++){for(var d=a.rows[n].getElementsByTagName("td"),i=0,o=d.length;o>i&&d[i]!=t;i++);
if(o>i)break}return r>n?{day:i,week:n}:null},e._get_year_month_date=function(t){var t=e._get_year_el_node(t,e._locate_year_month_root);if(!t)return null;var a=t.getAttribute("date");return a?e.date.week_start(e.templates.xml_date(a)):null},e._locate_year_month_day=function(e){return e.className&&-1!=e.className.indexOf("dhx_year_event")&&e.hasAttribute&&e.hasAttribute("date")};var l=e._locate_event;e._locate_event=function(t){var a=l.apply(e,arguments);if(!a){var n=e._get_year_el_node(t,e._locate_year_month_day);
if(!n||!n.hasAttribute("date"))return null;var i=r(n.getAttribute("date")),d=e.getEvents(i,e.date.add(i,1,"day"));if(!d.length)return null;a=d[0].id}return a},e._locate_year_month_cell=function(e){return"td"==e.nodeName.toLowerCase()},e._locate_year_month_table=function(e){return"table"==e.nodeName.toLowerCase()},e._locate_year_month_root=function(e){return e.hasAttribute&&e.hasAttribute("date")},e._get_year_month_cell=function(e){return this._get_year_el_node(e,this._locate_year_month_cell)},e._get_year_month_table=function(e){
return this._get_year_el_node(e,this._locate_year_month_table)},e._get_year_month_root=function(e){return this._get_year_el_node(this._get_year_month_table(e),this._locate_year_month_root)},e._get_year_el_node=function(e,t){for(;e&&!t(e);)e=e.parentNode;return e}}()});
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_year_view.js.map