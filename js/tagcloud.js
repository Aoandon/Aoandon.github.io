
$(document).ready(function () {
  var entries = [
  { label: 'HTML 5', url: '', target: '_top' },
  { label: 'CSS', url: '', target: '_top' },
  { label: 'JavaScript', url: '', target: '_top' },
  { label: 'jQuery', url: '', target: '_top' },
  { label: 'PHP', url: '', target: '_top' },
  { label: 'NoSQL', url: '', target: '_top' },
  { label: 'SQL', url: '', target: '_top' },
  { label: 'XML', url: '', target: '_top' },
  { label: 'WordPress', url: '', target: '_top' },
  { label: 'Bootstrap', url: '', target: '_top' },
  { label: 'Pascal', url: '', target: '_top' },
  { label: 'Visual Basic', url: '', target: '_top' },
  { label: 'C++', url: '', target: '_top' },
  ];

  var settings = {
    entries: entries,
    width: 650,
    height: 500,
    radius: '65%',
    radiusMin: 50,
    bgDraw: true,
    bgColor: '#eee',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 5,
    fov: 800,
    speed: 0.5,
    fontFamily: 'Roboto", sans-serif',
    fontSize: '15',
    fontColor: '#8d8d8d',
    fontWeight: 'bold', //bold
    fontStyle: 'normal', //italic 
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $('#tag-cloud').svg3DTagCloud(settings);
});