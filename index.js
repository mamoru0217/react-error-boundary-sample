import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.onClickButton = this.onClickButton.bind(this)
    this.throwError = this.throwError.bind(this)
  }

  onClickButton() {
    this.setState({
      count: ++this.state.count
    })
  }

  throwError() {
    if (this.state.count > 5) {
      throw new Error('Do not touch me!')
    }
  }

  render() {
    this.throwError()
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.onClickButton}>Increment</button>
      </div>
    )
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <dialog open>Something went wrong.</dialog>;
    }
    return this.props.children
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <Main/>
  </ErrorBoundary>,
  document.querySelector('#main')
)
