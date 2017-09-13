import Link from 'next/link'
import {Col, Nav, NavItem, Glyphicon} from 'react-bootstrap'

function handleSelect(selectedKey) {
  console.log('selected ' + selectedKey);
}

export default ({pathname}) => (
  <div>
    <Nav bsStyle="pills" stacked activeHref={pathname}>
      <NavItem href="/internal"><Glyphicon bsStyle="larger" glyph="stats"/>Overview</NavItem>
      <NavItem href="/internal/sales"><Glyphicon bsStyle="larger" glyph="usd"/>Sales</NavItem>
      <NavItem href="/internal/customers"><Glyphicon bsStyle="larger" glyph="user"/>Customers</NavItem>
      <NavItem href="/internal/products"><Glyphicon bsStyle="larger" glyph="th-large"/>Products</NavItem>
      <NavItem href="/internal/analyze"><Glyphicon bsStyle="larger" glyph="signal"/>Analyze</NavItem>
    </Nav>
  </div>
)
