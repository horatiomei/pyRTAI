var NAVTREE =
[
  [ "PyRTAI", "index.html", [
    [ "Class List", "annotated.html", [
      [ "pyrtai::configurator::Configurator", "classpyrtai_1_1configurator_1_1_configurator.html", null ],
      [ "pyrtai::connector::Connector", "classpyrtai_1_1connector_1_1_connector.html", null ],
      [ "pyrtai::data_collector::DataCollector", "classpyrtai_1_1data__collector_1_1_data_collector.html", null ],
      [ "pyrtai::data_poller::DataPoller", "classpyrtai_1_1data__poller_1_1_data_poller.html", null ],
      [ "pyrtai::custom_exceptions::RtaiConfigError", "classpyrtai_1_1custom__exceptions_1_1_rtai_config_error.html", null ],
      [ "pyrtai::custom_exceptions::RtaiError", "classpyrtai_1_1custom__exceptions_1_1_rtai_error.html", null ],
      [ "pyrtai::rtai_server::RtaiServer", "classpyrtai_1_1rtai__server_1_1_rtai_server.html", null ],
      [ "pyrtai::custom_exceptions::RtaiXmlRpcError", "classpyrtai_1_1custom__exceptions_1_1_rtai_xml_rpc_error.html", null ],
      [ "pyrtai::target::Target", "classpyrtai_1_1target_1_1_target.html", null ]
    ] ],
    [ "Class Index", "classes.html", null ],
    [ "Class Hierarchy", "hierarchy.html", [
      [ "pyrtai::configurator::Configurator", "classpyrtai_1_1configurator_1_1_configurator.html", null ],
      [ "pyrtai::connector::Connector", "classpyrtai_1_1connector_1_1_connector.html", null ],
      [ "pyrtai::data_collector::DataCollector", "classpyrtai_1_1data__collector_1_1_data_collector.html", null ],
      [ "pyrtai::data_poller::DataPoller", "classpyrtai_1_1data__poller_1_1_data_poller.html", null ],
      [ "pyrtai::custom_exceptions::RtaiError", "classpyrtai_1_1custom__exceptions_1_1_rtai_error.html", [
        [ "pyrtai::custom_exceptions::RtaiConfigError", "classpyrtai_1_1custom__exceptions_1_1_rtai_config_error.html", null ],
        [ "pyrtai::custom_exceptions::RtaiXmlRpcError", "classpyrtai_1_1custom__exceptions_1_1_rtai_xml_rpc_error.html", null ]
      ] ],
      [ "pyrtai::rtai_server::RtaiServer", "classpyrtai_1_1rtai__server_1_1_rtai_server.html", null ],
      [ "pyrtai::target::Target", "classpyrtai_1_1target_1_1_target.html", null ]
    ] ],
    [ "Class Members", "functions.html", null ],
    [ "Packages", "namespaces.html", [
      [ "custom_exceptions", "namespacecustom__exceptions.html", null ],
      [ "pyrtai", "namespacepyrtai.html", null ],
      [ "pyrtai::configurator", "namespacepyrtai_1_1configurator.html", null ],
      [ "pyrtai::connector", "namespacepyrtai_1_1connector.html", null ],
      [ "pyrtai::custom_exceptions", "namespacepyrtai_1_1custom__exceptions.html", null ],
      [ "pyrtai::data_collector", "namespacepyrtai_1_1data__collector.html", null ],
      [ "pyrtai::data_poller", "namespacepyrtai_1_1data__poller.html", null ],
      [ "pyrtai::rtai_server", "namespacepyrtai_1_1rtai__server.html", null ],
      [ "pyrtai::target", "namespacepyrtai_1_1target.html", null ],
      [ "pyrtai::utility", "namespacepyrtai_1_1utility.html", null ]
    ] ],
    [ "Package Functions", "namespacemembers.html", null ],
    [ "File List", "files.html", [
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/__init__.py", "____init_____8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/configurator.py", "configurator_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/connector.py", "connector_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/custom_exceptions.py", "custom__exceptions_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/data_collector.py", "data__collector_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/data_poller.py", "data__poller_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/rtai_server.py", "rtai__server_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/target.py", "target_8py.html", null ],
      [ "/home/drwolf/Devel/pyRTAI/pyrtai/utility.py", "utility_8py.html", null ]
    ] ]
  ] ]
];

function createIndent(o,domNode,node,level)
{
  if (node.parentNode && node.parentNode.parentNode)
  {
    createIndent(o,domNode,node.parentNode,level+1);
  }
  var imgNode = document.createElement("img");
  if (level==0 && node.childrenData)
  {
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() 
    {
      if (node.expanded) 
      {
        $(node.getChildrenUL()).slideUp("fast");
        if (node.isLast)
        {
          node.plus_img.src = node.relpath+"ftv2plastnode.png";
        }
        else
        {
          node.plus_img.src = node.relpath+"ftv2pnode.png";
        }
        node.expanded = false;
      } 
      else 
      {
        expandNode(o, node, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
  }
  else
  {
    domNode.appendChild(imgNode);
  }
  if (level==0)
  {
    if (node.isLast)
    {
      if (node.childrenData)
      {
        imgNode.src = node.relpath+"ftv2plastnode.png";
      }
      else
      {
        imgNode.src = node.relpath+"ftv2lastnode.png";
        domNode.appendChild(imgNode);
      }
    }
    else
    {
      if (node.childrenData)
      {
        imgNode.src = node.relpath+"ftv2pnode.png";
      }
      else
      {
        imgNode.src = node.relpath+"ftv2node.png";
        domNode.appendChild(imgNode);
      }
    }
  }
  else
  {
    if (node.isLast)
    {
      imgNode.src = node.relpath+"ftv2blank.png";
    }
    else
    {
      imgNode.src = node.relpath+"ftv2vertline.png";
    }
  }
  imgNode.border = "0";
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  a.appendChild(node.label);
  if (link) 
  {
    a.href = node.relpath+link;
  } 
  else 
  {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
      node.expanded = false;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() 
  {
    if (!node.childrenUL) 
    {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
}

function expandNode(o, node, imm)
{
  if (node.childrenData && !node.expanded) 
  {
    if (!node.childrenVisited) 
    {
      getNode(o, node);
    }
    if (imm)
    {
      $(node.getChildrenUL()).show();
    } 
    else 
    {
      $(node.getChildrenUL()).slideDown("fast",showRoot);
    }
    if (node.isLast)
    {
      node.plus_img.src = node.relpath+"ftv2mlastnode.png";
    }
    else
    {
      node.plus_img.src = node.relpath+"ftv2mnode.png";
    }
    node.expanded = true;
  }
}

function getNode(o, po)
{
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) 
  {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
        i==l);
  }
}

function findNavTreePage(url, data)
{
  var nodes = data;
  var result = null;
  for (var i in nodes) 
  {
    var d = nodes[i];
    if (d[1] == url) 
    {
      return new Array(i);
    }
    else if (d[2] != null) // array of children
    {
      result = findNavTreePage(url, d[2]);
      if (result != null) 
      {
        return (new Array(i).concat(result));
      }
    }
  }
  return null;
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;

  getNode(o, o.node);

  o.breadcrumbs = findNavTreePage(toroot, NAVTREE);
  if (o.breadcrumbs == null)
  {
    o.breadcrumbs = findNavTreePage("index.html",NAVTREE);
  }
  if (o.breadcrumbs != null && o.breadcrumbs.length>0)
  {
    var p = o.node;
    for (var i in o.breadcrumbs) 
    {
      var j = o.breadcrumbs[i];
      p = p.children[j];
      expandNode(o,p,true);
    }
    p.itemDiv.className = p.itemDiv.className + " selected";
    p.itemDiv.id = "selected";
    $(window).load(showRoot);
  }
}

