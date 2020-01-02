import React, { Component } from "react";
import MultipleGridImages from "react-multiple-image-grid";

export class GridComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      album: ""
    };
  }
  componentDidMount() {
    let albumtitle = this.props.photos.title;

    let data = this.props.photos.photo
      .sort((a, b) => a.title > b.title)
      .slice(0, this.props.slice)
      .map(p => {
        return p.thumbnailUrl;
      });
    this.setState({
      images: data,
      album: albumtitle
    });
  }

  render() {
    return (
      <div style={{ width: "40%" }} className="col-md-12 col-lg-4 col-xs-12">
        <h4
          style={{
            textTransform: "capitalize",
            fontSize: "14px",
            marginBottom: "0",
            marginTop: "20px",
            minHeight: "40px",
            display: "flex",
            alignItems: "center",
            fontWeight: "bold"
          }}
        >
          {" "}
          {this.state.album} ({this.state.images.length} photos){" "}
        </h4>
        <MultipleGridImages images={this.state.images} key="1" />
      </div>
    );
  }
}

export default GridComponent;

