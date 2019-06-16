import React, {Component} from "react";
import styled from "styled-components";
import PresentationsGrid from "../grid/Grid";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2em;
`;

class TableSection extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      index: 0,
      nextIndex: 16,
      items: []
    };

    // Binds our scroll event handler
    window.onscroll = () => {
      const {
        loadItems,
        state: {error, isLoading, hasMore}
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 600
      ) {
        loadItems();
      }
    };
  }

  componentWillMount() {
    // Loads some users on initial load
    this.loadItems();
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.props.resources !== prevProps.resources) {
      this.setState((prevState, props) => ({
        items: props.resources
      }));
    }
    return null;
  }

  loadItems = () => {
    this.setState((prevState, props) => ({
      isLoading: true,
      index: prevState.index + 16,
      nextIndex: prevState.nextIndex + 16
    }));

    const nextUsers = this.props.resources.slice(
      this.state.index,
      this.state.nextIndex
    );

    this.setState({
      // Note: Depending on the API you're using, this value may
      // be returned as part of the payload to indicate that there
      // is no additional data to be loaded
      hasMore: this.state.items.length < this.props.resources.length,
      isLoading: false,
      items: [...this.state.items, ...nextUsers]
    });
  };
  render() {
    const {error, hasMore, isLoading, items} = this.state;
    return (
      <TableContainer>
        <PresentationsGrid data={items} template />
      </TableContainer>
    );
  }
}

export default TableSection;
