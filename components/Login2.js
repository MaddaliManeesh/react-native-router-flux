import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Dimensions
} from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default class Login2 extends React.Component {
  render() {
    let { width, height } = Dimensions.get("window");
    return (
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
          <View style={{ padding: 10, paddingTop: 20 }}>
            <Image source={require("../images/back.png")} />
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              padding: 10,
              paddingLeft: 5
            }}
          >
            <View
              style={{
                backgroundColor: "rgb(242,242,242)",
                alignItems: "center",
                width: 270,
                borderRadius: 5,
                flexDirection: "row"
              }}
            >
              <View style={{ paddingLeft: 4 }}>
                <Image source={require("../images/searchIcon.png")} />
              </View>
              <View style={{ paddingRight: 0 }}>
                <TextInput
                  style={{
                    flex: 1,
                    paddingTop: 0,
                    paddingRight: 200,
                    paddingBottom: 0,
                    paddingLeft: 10
                  }}
                />
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Image source={require("../images/clear.png")} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "rgb(242,242,242)" }}>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              flexDirection: "row"
            }}
          >
            <Image
              source={{
                uri:
                  "https://www.lipstiq.com/wp-content/uploads/2016/08/KFC13.jpg"
              }}
              style={{ position: "absolute", width: 300, height: 75 }}
              resizeMode="cover"
              blurRadius={5}
              borderRadius={5}
            />
            <View style={{ padding: 15 }}>
              <Image source={require("../images/logo.png")} />
            </View>
            <View style={{ justifyContent: "center", flexDirection: "column" }}>
              <Text style={{ color: "white", fontSize: 18 }}>KFC</Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                MALL OF THE EMIRATES
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                WEST FOOD COURT
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 40
              }}
            >
              <Image
                source={require("../images/white-star.png")}
                style={{ width: 15, height: 15 }}
              />
              <Text style={{ color: "white" }}>4.5</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              flexDirection: "row"
            }}
          >
            <Image
              source={{
                uri:
                  "http://www.gristleandgossip.com/wp-content/uploads/2017/07/ct-mcdonalds-premium-burgers-0726-biz-20170725.jpg"
              }}
              style={{ position: "absolute", width: 300, height: 75 }}
              resizeMode="cover"
              blurRadius={7}
              borderRadius={5}
            />
            <View style={{ padding: 15 }}>
              <Image source={require("../images/M.png")} />
            </View>
            <View style={{ justifyContent: "center", flexDirection: "column" }}>
              <Text style={{ color: "white", fontSize: 18 }}>MCDONALS'S</Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                MALL OF THE EMIRATES
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                EAST FOOD COURT
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 40
              }}
            >
              <Image
                source={require("../images/white-star.png")}
                style={{ width: 15, height: 15 }}
              />
              <Text style={{ color: "white" }}>4.5</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
              flexDirection: "row"
            }}
          >
            <Image
              source={{
                uri:
                  "http://s.newsweek.com/sites/www.newsweek.com/files/2016/08/08/burger-king_0.jpg"
              }}
              style={{ position: "absolute", width: 300, height: 75 }}
              resizeMode="cover"
              blurRadius={7}
              borderRadius={5}
            />
            <View style={{ padding: 15 }}>
              <Image source={require("../images/B.png")} />
            </View>
            <View style={{ justifyContent: "center", flexDirection: "column" }}>
              <Text style={{ color: "white", fontSize: 18 }}>BURGER KING</Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                MALL OF THE EMIRATES
              </Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                WEST FOOD COURT
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 40
              }}
            >
              <Image
                source={require("../images/white-star.png")}
                style={{ width: 15, height: 15 }}
              />
              <Text style={{ color: "white" }}>4.5</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "orange",
              margin: 10,
              borderRadius: 5,
              flexDirection: "row"
            }}
          >
            <Image
              source={{
                uri:
                  "https://s3-eu-west-1.amazonaws.com/cdn.cobone.com/deals/uae/alfarooj/meal/bigalfaroojmeal.jpg?v=34"
              }}
              style={{ position: "absolute", width: 300, height: 75 }}
              resizeMode="cover"
              blurRadius={5}
              borderRadius={5}
            />
            <View style={{ padding: 15 }}>
              <Image source={require("../images/P.png")} />
            </View>
            <View style={{ justifyContent: "center", flexDirection: "column" }}>
              <Text style={{ color: "white", fontSize: 18 }}>AL FAROOJ</Text>
              <Text style={{ color: "white", fontSize: 12 }}>
                MALL OF THE EMIRATES
              </Text>
              {/* <Text style={{ color: "white", fontSize: 12 }}>
              EAST FOOD COURT
            </Text> */}
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 40
              }}
            >
              <Image
                source={require("../images/white-star.png")}
                style={{ width: 15, height: 15 }}
              />
              <Text style={{ color: "white" }}>4.5</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
          <View style={{ alignItems: "center" }}>
            <Text>END OF THE RESULTS </Text>
          </View>
          <View style={{ alignItems: "center", paddingBottom: 20 }}>
            <Image source={require("../images/quickbytz.png")} />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: 10
            }}
          >
            <View>
              <Image source={require("../images/qb.png")} />
            </View>
            <View>
              <Image source={require("../images/bellFontawesome.png")} />
            </View>
            <View>
              <Image
                source={require("../images/undefinedSimpleLineIcons.png")}
              />
            </View>
            <View>
              <Image source={require("../images/menu.png")} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
