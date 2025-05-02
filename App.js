import Animated, {
  scrollTo,
  useAnimatedRef,
  useFrameCallback,
} from "react-native-reanimated";
import { View } from "react-native";

export default function Repro() {
  const aref = useAnimatedRef();

  useFrameCallback((info) => {
    if (info.timestamp) {
      scrollTo(aref, 0, Math.sin(info.timestamp / 500) * 100 + 100, false);
    }
  });

  return (
    <Animated.ScrollView ref={aref} style={{ flex: 1, marginTop: 120 }}>
      {Array.from({ length: 200 }).map((_, i) => (
        <View
          key={i}
          style={{
            height: 100,
            width: "100%",
            backgroundColor: i % 2 === 0 ? "black" : "white",
          }}
        />
      ))}
    </Animated.ScrollView>
  );
}
