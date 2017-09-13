import {Col, NavDropdown,Nav, NavItem, Glyphicon,MenuItem} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav fluid staticTop bsStyle="pills" className="nav-sidebar" stacked activeHref={pathname}>
      <NavItem href="/external/"><Glyphicon bsStyle="larger" glyph="stats"/>Overview</NavItem>
      <NavItem href="/external/sales"><Glyphicon bsStyle="larger" glyph="usd"/>Sales</NavItem>
      <NavItem href="/external/customers"><Glyphicon bsStyle="larger" glyph="user"/>Customers</NavItem>
      <NavItem href="/external/trends"><Glyphicon bsStyle="larger" glyph="th-large" />Trends</NavItem>
      <NavItem href="/external/analyze"><Glyphicon bsStyle="larger" glyph="signal" />Analyze</NavItem>
    </Nav>
  </div>
)
