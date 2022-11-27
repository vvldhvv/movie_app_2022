import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
//    const { location } = this.props;
//    console.log(location);
  }

  render() {
    /*
    const { location } = this.props;
    console.log(this.props);
    return null;
    */
    /*
    if (location.state)
    {
      return <span>{location.state.title}</span>;
    }
    else
    {
      return null;
    }*/
    return (
      <div className="about__container">
        <span>
          "이것은 Detail 이다"
        </span>
        <span>- 이동훈</span>
      </div>
    );
  }
}

export default Detail;