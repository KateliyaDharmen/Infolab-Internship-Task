import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { ButtonGroup, Button, Pagination, Breadcrumb, OverlayTrigger, Tooltip, Toast, ToastContainer } from 'react-bootstrap';
import ControlledTabs, { JustifiedTabs, PillTabs } from './Tabs';
import Details from './Details';


function App() {

  // Btngroups Component
  const Btngroups = () => {
    return (
      <div className="text-center   d-flex justify-content-center ">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </div>
    );
  };

  // Pagination Component
  const PaginationComp = () => {
    return (
      <div className="text-center  d-flex justify-content-center">
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  };

  // Breadcrumbs Component
  const BreadcrumbsComp = () => {
    return (
      <div className="mt-3 text-center d-flex justify-content-center">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  };

  // Overlays Component
  const OverlaysComp = () => {
    return (
      <div className="mt-3 text-center align-content-center align-items-center">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="button-tooltip-2">Check out this tooltip!</Tooltip>}
        >
          {({ ref, ...triggerHandler }) => (
            <Button
              variant="success"
              ref={ref}
              {...triggerHandler}
            >
              Hover me to see
            </Button>
          )}
        </OverlayTrigger>
      </div>
    );
  };

  // Toasts Component
  const ToastsComp = () => {

    return (
      <div className="mt-3 align-items-center">
        <div className="p-3" style={{ minHeight: '200px' }}>
          <Button onClick={() => { }}>Toggle Toast</Button>
          <ToastContainer position="top-end">
            <Toast show={false} onClose={() => { }} delay={3000} autohide>
              <Toast.Header>
                <strong className="me-auto">React Bootstrap</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>hi</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <h1 className="text-center  mt-4">React Bootstrap Components</h1>

      <div className="container  text-body-tertiary mt text-center align-items-center">
        {/* Render each component */}
        <h2>Btngroups Component</h2>
        <Btngroups />

        <h2 className="mt-5 text-body-tertiary">Pagination</h2>
        <PaginationComp />

        <h2 className="mt-4 text-body-tertiary">Breadcrumbs </h2>
        <BreadcrumbsComp />

        <h2 className="mt-5 text-body-tertiary">Overlays </h2>
        <OverlaysComp />

        <h2 className="mt-5 text-body-tertiary">Toasts</h2>
        <ToastsComp />
      </div>
      <h1 className="text-center  mt-4">React Tabs Bootstrap Components</h1>
      <div className="container  mt text-center align-items-center">
        <h2 className="mt-5 ">Controlled Tabs</h2>


        <ControlledTabs />
        <h2 className="mt-5">Justified Tabs</h2>
        <JustifiedTabs />
        <h2 className="mt-5">Pill Tabs</h2>
        <PillTabs />


      </div>
      <h1 className="text-center  mt-4">Details Components</h1>
      <div className="container  text-body-tertiary mt text-center align-items-center" >
        <Details />
      </div>


    </div>
  );
}

export default App;
