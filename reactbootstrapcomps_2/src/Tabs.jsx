
import { Tab, Nav } from 'react-bootstrap';

// ControlledTabs Component
const ControlledTabs = () => {
  return (
    <Tab.Container id="controlled-tabs-example" defaultActiveKey="first">
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h4>Tab 1 Content</h4>
          <p>This is the content of Tab 1</p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h4>Tab 2 Content</h4>
          <p>This is the content of Tab 2</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h4>Tab 3 Content</h4>
          <p>This is the content of Tab 3</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

// JustifiedTabs Component
const JustifiedTabs = () => {
  return (
    <Tab.Container id="justified-tabs-example" defaultActiveKey="first">
      <Nav variant="tabs" justify>
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h4>Tab 1 Content</h4>
          <p>This is the content of Tab 1</p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h4>Tab 2 Content</h4>
          <p>This is the content of Tab 2</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h4>Tab 3 Content</h4>
          <p>This is the content of Tab 3</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

// PillTabs Component
const PillTabs = () => {
  return (
    <Tab.Container id="pill-tabs-example" defaultActiveKey="first">
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <h4>Tab 1 Content</h4>
          <p>This is the content of Tab 1</p>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <h4>Tab 2 Content</h4>
          <p>This is the content of Tab 2</p>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
          <h4>Tab 3 Content</h4>
          <p>This is the content of Tab 3</p>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default ControlledTabs;
export { JustifiedTabs, PillTabs };
