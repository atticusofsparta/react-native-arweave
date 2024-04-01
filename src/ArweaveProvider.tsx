import Arweave from "arweave";
import { Text, View } from "react-native";

export default function ArweaveProvider() {
    const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https',
      });

      return (
        <View>
          <Text>Arweave Provider {JSON.stringify(arweave.api.config)}</Text>
        </View>
      )
}