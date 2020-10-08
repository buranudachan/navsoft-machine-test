import React from "react";
import { Button, Card, Row, Col } from "antd";
import { ApplicationState } from "../../app-ducks/types";
import { omit, map } from "lodash";
import SetCurrentRoute from "../../app-components/routes/SetCurrentRoutes";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { prodocuListActions } from "./ducks/productListActions";
import { appActions } from "../../app-ducks/appActions";
import productListSelectors from "./ducks/productListSelectors";
class ProductList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.props.actions.triggerProductList();
    }
    onClick() {
        this.setState({
            count: this.state.count + 1
        });
    }
    public render() {
        const divStyle: any = {
            overflowY: 'scroll',
            width: '100%',
            float: 'left',
            height: '100%',
            position: 'relative'
        };

        return (



            <React.Fragment>
                <Card style={divStyle}>
                    <Row className="custome-header">
                        <Col span={10}>
                            <h2>Count:{this.state.count}</h2>
                        </Col>

                    </Row>
                    <Row>
                        {map(this.props.productListDetail, ((data: any) =>
                            <div className={`gx-product-item`}>
                                <div className="gx-product-image">
                                    <div className="gx-grid-thumb-equal">
                                        <span className="gx-link gx-grid-thumb-cover">
                                            <img alt="Remy Sharp" src={data.imageURL} />
                                        </span>
                                    </div>
                                </div>

                                <div className="gx-product-body">
                                    <h3 className="gx-product-title">{data.productName}
                                        <small className="gx-text-grey">{", "}</small>
                                    </h3>
                                    <div className="ant-row-flex">
                                        <h4>{data.price} </h4>
                                        <h5 className="gx-text-muted gx-px-2">
                                            <del>{data.price}</del>
                                        </h5>
                                        <h5 className="gx-text-success">3% off</h5>
                                    </div>

                                </div>

                                <div className="gx-product-footer">
                                    <Button onClick={this.onClick}> Add To Card</Button>

                                    <Button type="primary">Buy</Button>
                                </div>
                            </div>
                        ))}

                    </Row>

                </Card>
            </React.Fragment >
        );
    }
}
const mapStateToProps = (state: ApplicationState) => {
    return {
        ...productListSelectors.getProductListData(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            ...bindActionCreators(omit(prodocuListActions, ["Type"]) as any, dispatch),
            setRoute: (route: string) => dispatch(appActions.setCurrentPath(route)),
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SetCurrentRoute(ProductList));
