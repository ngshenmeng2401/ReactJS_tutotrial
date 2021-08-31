<CSSTransition
    in={this.state.show}
    timeout={1000}
    classNames="fade"
    unmountOnExit
    appear={true}
    onEnter={(element) => {element.style.color = 'blue'}}
    // onExited={() => setShowButton(true)}
></CSSTransition>