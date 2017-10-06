
class Home extends React.Component {
    render() {
        return (
            <div className="main-content home">
                <h2>Front End Course Directory</h2>
                <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
                <p>Learn front end web development and much more! This simple directory app offers a preview of our course
					library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
					skills you need to launch a new career in front end web development.</p>
                <p>We have thousands of videos created by expert teachers on web design and front end development. Our
					library is continually refreshed with the latest on web technology so you will never fall behind.</p>
                <hr />

            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <div className="main-content">
                <h2>About</h2>
                <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
            </div>
        );
    }
}

class Teachers extends React.Component {
    render() {
        return (
            <div className="main-content">
                <h2>Teachers</h2>
                <p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
            </div>
        );
    }
}

class Courses extends React.Component {
    render() {
        const { route } = this.props;
        let CurrentList = null;
        let class1, class2, class0
        switch (route) {

            case 'css':
                CurrentList = ['How to Make a CSS', 'HTML CSS'].map((item, index) => {
                    return <li key={index}> {item} </li>
                });
                class1 = 'active';
                break;
            case 'javascript':
                CurrentList = ['How to Make a JS', 'HTML JS'].map((item, index) => {
                    return <li key={index}> {item} </li>
                });
                class2 = 'active';
                break;
            default: //'html'
                CurrentList = ['How to Make a Website', 'HTML Forms'].map((item, index) => {
                    return <li key={index}> {item} </li>
                });
                class0 = 'active';
                break;
        }
        return (
            <div className="main-content courses">
                <div className="course-header group">
                    <h2>Courses</h2>
                    <ul className="course-nav">
                        <li><a href='#/courses/html' className={class0}>HTML</a></li>
                        <li><a href='#/courses/css' className={class1}>CSS</a></li>
                        <li><a href='#/courses/javascript' className={class2}>JavaScript</a></li>
                    </ul>

                </div>
                <div>
                    <ul>
                        {CurrentList}
                    </ul>
                </div>

                {/* Write routes here... */}
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: window.location.hash.substr(1),
        };
    }
    componentDidMount() {
        window.addEventListener('hashchange', () => {
            console.log(window.location.hash.substr(1));

            this.setState({
                route: window.location.hash.substr(1),
            });
        });
    }
    render() {
        let Child;
        let classActive1;
        let classActive2;
        let classActive3;
        let classActive0;

        let propsForRepos = null;
        switch (this.state.route) {
            case '/about':
                Child = About;
                classActive1 = 'active'
                break;
            case '/teachers':
                Child = Teachers;
                classActive2 = 'active'
                break;
            case '/courses':
                Child = Courses;
                classActive3 = 'active'
                break;
            case '/courses/html':
                Child = Courses;
                propsForRepos = 'html';
                break;
            case '/courses/css':
                Child = Courses;
                propsForRepos = 'css';
                break;
            case '/courses/javascript':
                Child = Courses;
                propsForRepos = 'javascript';
                break;
            default:
                Child = Home;
                classActive0 = 'active'
        }
        return (
            <div data-reactroot className='container'>
                <header>
                    <span className='icn-logo'>
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </span>
                    <div>
                        <ul className='main-nav'>
                            <li>
                                <a className={classActive0} href="#">Home</a>
                            </li>
                            <li>
                                <a className={classActive1} href="#/about">About</a>
                            </li>
                            <li>
                                <a className={classActive2} href="#/teachers">Teachers</a>
                            </li>
                            <li>
                                <a className={classActive3} href="#/courses">Courses</a>
                            </li>
                        </ul>
                    </div>
                </header>
                <div>
                    {
                        propsForRepos ?
                            <Child route={propsForRepos} />
                            :
                            <Child />
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));