import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

interface AIModalProps {
  isVisible: boolean;
  toggleModal: () => void;
  aiResponse: string | null;
  loading: boolean;
}

const AIModal: React.FC<AIModalProps> = ({
  isVisible,
  toggleModal,
  aiResponse,
  loading,
}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-11/12 bg-white rounded-lg p-6">
          <Text className="text-lg font-bold text-black mb-4">
            AI Suggestions
          </Text>

          <Text className="text-[1rem] text-black mb-4 font-bold">
            Here are some suggestions to improve your workout:
          </Text>

          {loading ? (
            <Text className="text-[1rem] text-black mb-4 font-bold">
              Still fetching suggestions...
            </Text>
          ) : (
            <Text className="text-gray-700">
              {aiResponse || "No suggestions available."}
            </Text>
          )}

          <TouchableOpacity
            className="mt-4 p-3 bg-red-600 rounded-lg"
            onPress={toggleModal}
          >
            <Text className="text-white text-center font-bold">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AIModal;
