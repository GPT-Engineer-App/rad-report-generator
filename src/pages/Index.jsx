import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, Stack, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaMicrophone, FaSave, FaImage, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [reportText, setReportText] = useState("");
  const [images, setImages] = useState([]);
  const toast = useToast();

  const handleVoiceInput = () => {
    // Simulate voice input for demonstration purposes
    setReportText("Voice input simulated: Fracture observed in the upper right femur.");
    toast({
      title: "Voice Input",
      description: "Voice input simulated and added to the report.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleSaveReport = () => {
    // Simulate saving the report
    toast({
      title: "Report Saved",
      description: "Your report has been successfully saved.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleAddImage = () => {
    // Simulate adding an image
    const newImage = "https://images.unsplash.com/photo-1522794338816-ee3a17a00ae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWRpb2xvZ3klMjBrZXklMjBpbWFnZXxlbnwwfHx8fDE3MTQwODU2OTJ8MA&ixlib=rb-4.0.3&q=80&w=1080";
    setImages([...images, newImage]);
    toast({
      title: "Image Added",
      description: "A key image has been added to the report.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="xl">
          Radiology Report Creator
        </Heading>
        <FormControl>
          <FormLabel htmlFor="report-text">Report Text</FormLabel>
          <Textarea id="report-text" value={reportText} onChange={(e) => setReportText(e.target.value)} placeholder="Type the report here or use voice recognition..." size="lg" />
        </FormControl>
        <Flex gap={4}>
          <IconButton icon={<FaMicrophone />} aria-label="Voice Input" onClick={handleVoiceInput} />
          <IconButton icon={<FaImage />} aria-label="Add Image" onClick={handleAddImage} />
          <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSaveReport}>
            Save Report
          </Button>
        </Flex>
        <Box>
          <Heading as="h2" size="md" mb={4}>
            Key Images
          </Heading>
          <Stack direction="row" spacing={4}>
            {images.map((img, index) => (
              <Image key={index} src={img} boxSize="100px" objectFit="cover" />
            ))}
            <IconButton icon={<FaPlus />} aria-label="Add More Images" variant="outline" onClick={handleAddImage} />
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
