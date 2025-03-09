import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

export interface ImageUploadProps {
  maxSize?: number;
  onUpload?: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ maxSize = 120, onUpload }) => {
  const handleDrop = React.useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length && onUpload) {
        onUpload(files[0]);
      }
    },
    [onUpload]
  );

  const handleBrowse = React.useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e: Event) => {
      const files = (e.target as HTMLInputElement).files;
      if (files?.length && onUpload) {
        onUpload(files[0]);
      }
    };
    input.click();
  }, [onUpload]);

  return (
    <Box
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleBrowse}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleBrowse();
        }
      }}
      role="button"
      tabIndex={0}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={{ base: 10, sm: 20 }}
      py={{ base: 3, sm: 4 }}
      mt={4}
      textAlign="center"
      borderWidth="2px"
      borderStyle="dashed"
      borderColor="gray.300"
      borderRadius="xl"
      cursor="pointer"
      _hover={{ borderColor: "gray.400" }}
    >
      <VStack >
        <Text fontSize="md">
          Drop your images here or{" "}
          <Text as="span" color="red.500" fontWeight="bold">
            browse
          </Text>
        </Text>
        <Text fontSize="sm" color="gray.500">
          Maximum upload file size: {maxSize}MB
        </Text>
      </VStack>
    </Box>
  );
};

export default ImageUpload;
