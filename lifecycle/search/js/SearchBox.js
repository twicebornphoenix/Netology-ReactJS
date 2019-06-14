class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  componentDidMount() {
    this.searchBoxPosition = document.querySelector('.search-box').getBoundingClientRect().y;
    this.setPosition = this.setPosition.bind(this);
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    return document.documentElement.scrollTop >= this.searchBoxPosition ? true : false;
  }

  setPosition() {
    this.setState({fixed: this.isFixed()});
  }
}