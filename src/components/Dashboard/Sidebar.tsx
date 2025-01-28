import { Box, VStack, Link, Separator } from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'next/router';

const Sidebar = () => {

    const router = useRouter();
    const auth = getAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth); // Sign out from Firebase
            router.push("/") // Redirect to the landing page
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <Box width="250px" height="100%" bg="#F6F8FF" color="black" p={4} position="sticky" borderColor="#CDCDCD" borderWidth="1px">
            <VStack spacing={6} align="start">
                <Link _hover={{ textDecor: "underline" }} href="/dashboard" fontWeight="400" p="16px"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.75 6C3.75 5.40326 3.98705 4.83097 4.40901 4.40901C4.83097 3.98705 5.40326 3.75 6 3.75H8.25C8.84674 3.75 9.41903 3.98705 9.84099 4.40901C10.2629 4.83097 10.5 5.40326 10.5 6V8.25C10.5 8.84674 10.2629 9.41903 9.84099 9.84099C9.41903 10.2629 8.84674 10.5 8.25 10.5H6C5.40326 10.5 4.83097 10.2629 4.40901 9.84099C3.98705 9.41903 3.75 8.84674 3.75 8.25V6ZM3.75 15.75C3.75 15.1533 3.98705 14.581 4.40901 14.159C4.83097 13.7371 5.40326 13.5 6 13.5H8.25C8.84674 13.5 9.41903 13.7371 9.84099 14.159C10.2629 14.581 10.5 15.1533 10.5 15.75V18C10.5 18.5967 10.2629 19.169 9.84099 19.591C9.41903 20.0129 8.84674 20.25 8.25 20.25H6C5.40326 20.25 4.83097 20.0129 4.40901 19.591C3.98705 19.169 3.75 18.5967 3.75 18V15.75ZM13.5 6C13.5 5.40326 13.7371 4.83097 14.159 4.40901C14.581 3.98705 15.1533 3.75 15.75 3.75H18C18.5967 3.75 19.169 3.98705 19.591 4.40901C20.0129 4.83097 20.25 5.40326 20.25 6V8.25C20.25 8.84674 20.0129 9.41903 19.591 9.84099C19.169 10.2629 18.5967 10.5 18 10.5H15.75C15.1533 10.5 14.581 10.2629 14.159 9.84099C13.7371 9.41903 13.5 8.84674 13.5 8.25V6ZM13.5 15.75C13.5 15.1533 13.7371 14.581 14.159 14.159C14.581 13.7371 15.1533 13.5 15.75 13.5H18C18.5967 13.5 19.169 13.7371 19.591 14.159C20.0129 14.581 20.25 15.1533 20.25 15.75V18C20.25 18.5967 20.0129 19.169 19.591 19.591C19.169 20.0129 18.5967 20.25 18 20.25H15.75C15.1533 20.25 14.581 20.0129 14.159 19.591C13.7371 19.169 13.5 18.5967 13.5 18V15.75Z" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> Overview</Link>
                <Link _hover={{ textDecor: "underline" }} href="/dashboard/orders" fontWeight="400" p="16px"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7.65359 17.8464C7.59839 17.988 7.46159 18.072 7.31999 18.072C7.27439 18.072 7.23119 18.0648 7.18559 18.0456L6.10559 17.6136C6.01715 17.5778 5.94639 17.5086 5.90865 17.421C5.8709 17.3334 5.86923 17.2344 5.90399 17.1456C5.97839 16.9608 6.18719 16.872 6.37199 16.944L7.45199 17.376C7.63919 17.4504 7.72799 17.6616 7.65359 17.8464ZM21.876 12.7296C21.9504 12.8184 21.9768 12.936 21.948 13.0488C21.9192 13.1592 21.84 13.2528 21.732 13.2936L19.5576 14.1624V18.72C19.5576 18.8664 19.4688 19.0008 19.332 19.0536L12.132 21.9336C12.1272 21.936 12.1224 21.9336 12.12 21.936C12.0816 21.9504 12.0408 21.96 12 21.96C11.9688 21.96 11.9376 21.9552 11.9088 21.9456L11.8872 21.9384C11.88 21.936 11.8752 21.936 11.868 21.9336L4.66799 19.0536C4.53119 18.9984 4.44239 18.8664 4.44239 18.72V14.1648L2.26799 13.296C2.15999 13.2528 2.08079 13.1616 2.05199 13.0512C2.02319 12.9384 2.04959 12.8208 2.12399 12.732L4.33199 10.08L2.12399 7.43041C2.04959 7.34161 2.02319 7.22401 2.05199 7.11121C2.08079 6.99841 2.15999 6.90721 2.26799 6.86641L8.18159 4.50001C8.86079 3.00241 10.3416 2.04001 12 2.04001C13.6584 2.04001 15.1392 3.00241 15.8184 4.50001L21.732 6.86641C21.84 6.90961 21.9192 7.00081 21.948 7.11121C21.9768 7.22401 21.9504 7.34161 21.876 7.43041L19.668 10.08L21.876 12.7296ZM18.2304 10.08L15.2568 8.89201C14.4648 9.86641 13.2672 10.44 12 10.44C10.7328 10.44 9.53519 9.86641 8.74319 8.89201L5.76959 10.08L12 12.5712L18.2304 10.08ZM16.116 5.39281C16.116 5.39761 16.116 5.40001 16.1184 5.40481C16.1376 5.49841 16.1496 5.59441 16.1616 5.69281C16.1664 5.73361 16.176 5.77681 16.1808 5.81761C16.1952 5.95681 16.2024 6.09841 16.2024 6.24001C16.2024 6.34081 16.1976 6.44161 16.1904 6.54241C16.188 6.57361 16.1832 6.60481 16.1808 6.63841C16.1736 6.70801 16.1664 6.77521 16.1568 6.84241C16.152 6.87841 16.1448 6.91441 16.14 6.95041C16.128 7.01521 16.116 7.08001 16.1016 7.14241C16.0944 7.17601 16.0872 7.21201 16.0776 7.24561C16.0608 7.31521 16.0416 7.38481 16.02 7.45201C16.0128 7.47841 16.0056 7.50481 15.996 7.53121C15.9648 7.62481 15.9312 7.71841 15.8952 7.80961C15.8904 7.82401 15.8832 7.83601 15.8784 7.85041C15.8472 7.92721 15.8112 8.00401 15.7752 8.08081C15.7608 8.10961 15.744 8.13841 15.7296 8.16721C15.7104 8.20561 15.6912 8.24401 15.672 8.28001L19.092 9.64801L21.0072 7.34881L16.116 5.39281ZM10.3056 6.49441L11.2656 7.45441C11.3352 7.52401 11.4288 7.56001 11.52 7.56001C11.6112 7.56001 11.7048 7.52401 11.7744 7.45441L13.6944 5.53441C13.836 5.39281 13.836 5.16481 13.6944 5.02561C13.6611 4.99194 13.6215 4.96521 13.5778 4.94696C13.5342 4.92872 13.4873 4.91932 13.44 4.91932C13.3927 4.91932 13.3458 4.92872 13.3021 4.94696C13.2585 4.96521 13.2188 4.99194 13.1856 5.02561L11.52 6.69121L10.8144 5.98561C10.7811 5.95194 10.7415 5.92521 10.6978 5.90696C10.6542 5.88872 10.6073 5.87932 10.56 5.87932C10.5127 5.87932 10.4658 5.88872 10.4221 5.90696C10.3785 5.92521 10.3388 5.95194 10.3056 5.98561C10.2719 6.01887 10.2452 6.05848 10.2269 6.10215C10.2087 6.14582 10.1993 6.19268 10.1993 6.24001C10.1993 6.28734 10.2087 6.33419 10.2269 6.37786C10.2452 6.42153 10.2719 6.46115 10.3056 6.49441ZM2.99279 7.35121L4.90799 9.65041L8.32799 8.28241C8.30639 8.24641 8.28959 8.20801 8.27039 8.16961C8.25599 8.14081 8.23919 8.10961 8.22479 8.08081C8.18879 8.00641 8.15519 7.93201 8.12399 7.85521C8.11679 7.84081 8.10959 7.82641 8.10479 7.80961C8.06879 7.71841 8.03519 7.62481 8.00399 7.53121C7.99439 7.50481 7.98719 7.47601 7.97999 7.44961L7.92239 7.24561C7.91279 7.21201 7.90559 7.17601 7.89839 7.14241C7.88399 7.07761 7.87199 7.01521 7.85999 6.95041C7.85279 6.91441 7.84799 6.87841 7.84319 6.84241C7.83359 6.77521 7.82639 6.70561 7.81919 6.63841C7.81679 6.60721 7.81199 6.57601 7.80959 6.54241C7.80239 6.44161 7.79759 6.34321 7.79759 6.24001C7.79759 6.09841 7.80479 5.95681 7.81919 5.81761C7.82399 5.77441 7.83359 5.73121 7.83839 5.68801C7.85039 5.59441 7.86239 5.49841 7.88159 5.40721C7.88159 5.40241 7.88159 5.40001 7.88399 5.39521L2.99279 7.35121ZM2.99279 12.8088L9.48959 15.408L11.4048 13.1088L4.91039 10.512L2.99279 12.8088ZM5.15999 18.4752L11.64 21.0672V13.9536L9.87599 16.0704C9.84227 16.1109 9.80008 16.1435 9.75239 16.1659C9.7047 16.1883 9.65267 16.1999 9.59999 16.2C9.55439 16.2 9.50879 16.1904 9.46559 16.1736L5.15999 14.4528V18.4752ZM18.84 14.4528L14.5344 16.176C14.4639 16.2049 14.3861 16.2105 14.3122 16.1919C14.2384 16.1733 14.1724 16.1316 14.124 16.0728L12.36 13.956V21.0696L18.84 18.4776V14.4528ZM21.0072 12.8088L19.092 10.5096L12.5928 13.1112L14.508 15.4104L21.0072 12.8088Z" fill="#5B5B5B" />
                </svg> Orders</Link>
                <Link _hover={{ textDecor: "underline" }} href="/dashboard/customers" fontWeight="400" p="16px"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.059 15.521C17.5268 15.2015 18.0755 15.0211 18.6415 15.0004C19.2076 14.9798 19.768 15.1199 20.2578 15.4044C20.7476 15.689 21.1468 16.1064 21.4093 16.6084C21.6718 17.1104 21.7868 17.6764 21.741 18.241C20.5412 18.6603 19.2668 18.8235 18 18.72C17.9961 17.5866 17.6697 16.4768 17.059 15.522C16.5169 14.6718 15.7691 13.972 14.8848 13.4875C14.0005 13.003 13.0083 12.7493 12 12.75C10.9918 12.7495 9.99981 13.0032 9.11571 13.4877C8.23162 13.9723 7.48399 14.6719 6.94199 15.522M17.999 18.719L18 18.75C18 18.975 17.988 19.197 17.963 19.416C16.1483 20.4571 14.0921 21.0033 12 21C9.82998 21 7.79299 20.424 6.03699 19.416C6.01128 19.1846 5.99892 18.9519 5.99999 18.719M5.99999 18.719C4.73361 18.8263 3.45989 18.6637 2.26099 18.242C2.21534 17.6776 2.33038 17.1117 2.59281 16.6099C2.85525 16.1081 3.25435 15.6908 3.74399 15.4063C4.23362 15.1218 4.79378 14.9817 5.3597 15.0021C5.92563 15.0226 6.4742 15.2028 6.94199 15.522M5.99999 18.719C6.00358 17.5857 6.33161 16.4769 6.94199 15.522M15 6.75C15 7.54565 14.6839 8.30871 14.1213 8.87132C13.5587 9.43393 12.7956 9.75 12 9.75C11.2043 9.75 10.4413 9.43393 9.87866 8.87132C9.31606 8.30871 8.99999 7.54565 8.99999 6.75C8.99999 5.95435 9.31606 5.19129 9.87866 4.62868C10.4413 4.06607 11.2043 3.75 12 3.75C12.7956 3.75 13.5587 4.06607 14.1213 4.62868C14.6839 5.19129 15 5.95435 15 6.75ZM21 9.75C21 10.0455 20.9418 10.3381 20.8287 10.611C20.7156 10.884 20.5499 11.1321 20.341 11.341C20.132 11.5499 19.884 11.7157 19.611 11.8287C19.338 11.9418 19.0455 12 18.75 12C18.4545 12 18.1619 11.9418 17.8889 11.8287C17.616 11.7157 17.3679 11.5499 17.159 11.341C16.9501 11.1321 16.7843 10.884 16.6713 10.611C16.5582 10.3381 16.5 10.0455 16.5 9.75C16.5 9.15326 16.737 8.58097 17.159 8.15901C17.581 7.73705 18.1532 7.5 18.75 7.5C19.3467 7.5 19.919 7.73705 20.341 8.15901C20.7629 8.58097 21 9.15326 21 9.75ZM7.49999 9.75C7.49999 10.0455 7.44179 10.3381 7.32871 10.611C7.21564 10.884 7.04991 11.1321 6.84098 11.341C6.63204 11.5499 6.38401 11.7157 6.11102 11.8287C5.83804 11.9418 5.54546 12 5.24999 12C4.95451 12 4.66193 11.9418 4.38895 11.8287C4.11596 11.7157 3.86793 11.5499 3.65899 11.341C3.45006 11.1321 3.28433 10.884 3.17126 10.611C3.05818 10.3381 2.99999 10.0455 2.99999 9.75C2.99999 9.15326 3.23704 8.58097 3.65899 8.15901C4.08095 7.73705 4.65325 7.5 5.24999 7.5C5.84672 7.5 6.41902 7.73705 6.84098 8.15901C7.26293 8.58097 7.49999 9.15326 7.49999 9.75Z" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> Customers</Link>
                <Link _hover={{ textDecor: "underline" }} href="/dashboard/inventory" fontWeight="400" p="16px"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.25 11.25H17.862C17.9508 11.0098 17.9975 10.7561 18 10.5V3.75C18 3.15326 17.7629 2.58097 17.341 2.15901C16.919 1.73705 16.3467 1.5 15.75 1.5H8.25C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75V10.5C6.00249 10.7561 6.04917 11.0098 6.138 11.25H3.75C3.15326 11.25 2.58097 11.4871 2.15901 11.909C1.73705 12.331 1.5 12.9033 1.5 13.5V20.25C1.5 20.8467 1.73705 21.419 2.15901 21.841C2.58097 22.2629 3.15326 22.5 3.75 22.5H10.5C11.0553 22.498 11.59 22.2895 12 21.915C12.41 22.2895 12.9447 22.498 13.5 22.5H20.25C20.8467 22.5 21.419 22.2629 21.841 21.841C22.2629 21.419 22.5 20.8467 22.5 20.25V13.5C22.5 12.9033 22.2629 12.331 21.841 11.909C21.419 11.4871 20.8467 11.25 20.25 11.25ZM18 14.25H15.75V12.75H18V14.25ZM12.75 3V5.25H11.25V3H12.75ZM7.5 10.5V3.75C7.5 3.55109 7.57902 3.36032 7.71967 3.21967C7.86032 3.07902 8.05109 3 8.25 3H9.75V5.25C9.75 5.64782 9.90804 6.02936 10.1893 6.31066C10.4706 6.59196 10.8522 6.75 11.25 6.75H12.75C13.1478 6.75 13.5294 6.59196 13.8107 6.31066C14.092 6.02936 14.25 5.64782 14.25 5.25V3H15.75C15.9489 3 16.1397 3.07902 16.2803 3.21967C16.421 3.36032 16.5 3.55109 16.5 3.75V10.5C16.5 10.6989 16.421 10.8897 16.2803 11.0303C16.1397 11.171 15.9489 11.25 15.75 11.25H8.25C8.05109 11.25 7.86032 11.171 7.71967 11.0303C7.57902 10.8897 7.5 10.6989 7.5 10.5ZM8.25 12.75V14.25H6V12.75H8.25ZM10.5 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V13.5C3 13.3011 3.07902 13.1103 3.21967 12.9697C3.36032 12.829 3.55109 12.75 3.75 12.75H4.5V14.25C4.5 14.6478 4.65804 15.0294 4.93934 15.3107C5.22064 15.592 5.60218 15.75 6 15.75H8.25C8.64782 15.75 9.02936 15.592 9.31066 15.3107C9.59196 15.0294 9.75 14.6478 9.75 14.25V12.75H10.5C10.6989 12.75 10.8897 12.829 11.0303 12.9697C11.171 13.1103 11.25 13.3011 11.25 13.5V20.25C11.25 20.4489 11.171 20.6397 11.0303 20.7803C10.8897 20.921 10.6989 21 10.5 21ZM21 20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H13.5C13.3011 21 13.1103 20.921 12.9697 20.7803C12.829 20.6397 12.75 20.4489 12.75 20.25V13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75H14.25V14.25C14.25 14.6478 14.408 15.0294 14.6893 15.3107C14.9706 15.592 15.3522 15.75 15.75 15.75H18C18.3978 15.75 18.7794 15.592 19.0607 15.3107C19.342 15.0294 19.5 14.6478 19.5 14.25V12.75H20.25C20.4489 12.75 20.6397 12.829 20.7803 12.9697C20.921 13.1103 21 13.3011 21 13.5V20.25Z" fill="#5B5B5B" />
                </svg> Inventory</Link>

                <Link _hover={{ textDecor: "underline" }} href="/dashboard/offers" fontWeight="400" p="16px"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7924 10.056L10.056 14.7924C9.94287 14.9017 9.7913 14.9621 9.63399 14.9608C9.47667 14.9594 9.32618 14.8963 9.21493 14.7851C9.10369 14.6738 9.04059 14.5233 9.03922 14.366C9.03785 14.2087 9.09833 14.0571 9.20763 13.944L13.944 9.20757C14.0572 9.09827 14.2087 9.03779 14.3661 9.03916C14.5234 9.04053 14.6739 9.10363 14.7851 9.21487C14.8964 9.32612 14.9595 9.47661 14.9608 9.63392C14.9622 9.79124 14.9017 9.9428 14.7924 10.056ZM10.3488 10.3488C10.4797 10.2181 10.5688 10.0515 10.605 9.87015C10.6411 9.68878 10.6227 9.50077 10.552 9.32989C10.4813 9.15901 10.3614 9.01295 10.2077 8.91018C10.0539 8.80741 9.87316 8.75256 9.68823 8.75256C9.50329 8.75256 9.32251 8.80741 9.16876 8.91018C9.01501 9.01295 8.89519 9.15901 8.82447 9.32989C8.75376 9.50077 8.73531 9.68878 8.77147 9.87015C8.80763 10.0515 8.89678 10.2181 9.02763 10.3488C9.2029 10.5238 9.4405 10.6222 9.68823 10.6222C9.93595 10.6222 10.1735 10.5238 10.3488 10.3488ZM13.6512 13.65C13.5204 13.7807 13.4312 13.9472 13.3951 14.1286C13.3589 14.3099 13.3774 14.498 13.4481 14.6688C13.5188 14.8397 13.6386 14.9858 13.7924 15.0886C13.9461 15.1913 14.1269 15.2462 14.3118 15.2462C14.4968 15.2462 14.6775 15.1913 14.8313 15.0886C14.985 14.9858 15.1049 14.8397 15.1756 14.6688C15.2463 14.498 15.2647 14.3099 15.2286 14.1286C15.1924 13.9472 15.1033 13.7807 14.9724 13.65C14.7972 13.4749 14.5596 13.3766 14.3118 13.3766C14.0641 13.3766 13.8265 13.4749 13.6512 13.65ZM20.6124 13.362C20.5648 13.678 20.4329 13.9754 20.2306 14.2229C20.0283 14.4704 19.7631 14.6588 19.4628 14.7684L18.2904 15.2052L18.6264 16.41C18.7118 16.7171 18.7141 17.0415 18.633 17.3499C18.552 17.6582 18.3905 17.9395 18.165 18.1649C17.9396 18.3904 17.6583 18.5519 17.3499 18.633C17.0416 18.7141 16.7172 18.7118 16.41 18.6264L15.2052 18.2904L14.7696 19.4628C14.6601 19.7629 14.4719 20.028 14.2247 20.2302C13.9774 20.4325 13.6803 20.5645 13.3644 20.6124C13.2684 20.6278 13.1713 20.6359 13.074 20.6364C12.8034 20.6367 12.5362 20.5753 12.2929 20.4567C12.0496 20.3382 11.8366 20.1657 11.67 19.9524L10.8948 18.972L9.85563 19.6632C9.58973 19.8402 9.28152 19.9433 8.96263 19.9618C8.64374 19.9804 8.32566 19.9137 8.04103 19.7687C7.75641 19.6237 7.5155 19.4056 7.34303 19.1367C7.17056 18.8678 7.07274 18.5579 7.05963 18.2388L7.00923 16.9908L5.76123 16.9404C5.44207 16.9272 5.13214 16.8294 4.86328 16.657C4.59441 16.4845 4.37628 16.2436 4.23128 15.959C4.08628 15.6743 4.01963 15.3563 4.03818 15.0374C4.05673 14.7185 4.15981 14.4103 4.33683 14.1444L5.02803 13.1052L4.04763 12.3288C3.79731 12.1306 3.6042 11.8695 3.48809 11.5721C3.37197 11.2747 3.33704 10.9518 3.38687 10.6365C3.4367 10.3211 3.56949 10.0247 3.77164 9.77764C3.97379 9.53055 4.23801 9.34167 4.53723 9.23037L5.70963 8.79477L5.37363 7.58997C5.28795 7.28271 5.28546 6.9582 5.36641 6.64966C5.44736 6.34113 5.60885 6.05964 5.83434 5.83403C6.05983 5.60842 6.34123 5.44678 6.64972 5.36566C6.95821 5.28454 7.28272 5.28685 7.59003 5.37237L8.79483 5.70837L9.23043 4.53717C9.34173 4.23795 9.53061 3.97373 9.7777 3.77158C10.0248 3.56943 10.3212 3.43663 10.6365 3.38681C10.9519 3.33698 11.2748 3.37191 11.5722 3.48802C11.8695 3.60414 12.1307 3.79725 12.3288 4.04757L13.1052 5.02797L14.1444 4.33677C14.4103 4.15974 14.7185 4.05667 15.0374 4.03812C15.3563 4.01957 15.6744 4.08622 15.959 4.23122C16.2436 4.37622 16.4846 4.59435 16.657 4.86321C16.8295 5.13208 16.9273 5.442 16.9404 5.76117L16.9908 7.00917L18.2388 7.05957C18.558 7.07268 18.8679 7.1705 19.1368 7.34297C19.4056 7.51543 19.6238 7.75635 19.7688 8.04097C19.9138 8.32559 19.9804 8.64368 19.9619 8.96257C19.9433 9.28146 19.8402 9.58967 19.6632 9.85557L18.972 10.8936L19.9524 11.67C20.2042 11.8668 20.3984 12.1277 20.5145 12.4254C20.6307 12.7232 20.6645 13.0467 20.6124 13.362ZM19.2084 12.612L17.7936 11.4924C17.6756 11.3989 17.5969 11.2645 17.5734 11.1158C17.5498 10.9671 17.583 10.8149 17.6664 10.6896L18.6636 9.19077C18.7227 9.10218 18.7572 8.99948 18.7634 8.89319C18.7697 8.7869 18.7476 8.68085 18.6993 8.58594C18.6511 8.49102 18.5784 8.41066 18.4889 8.35309C18.3993 8.29552 18.296 8.26283 18.1896 8.25837L16.3896 8.18517C16.239 8.17895 16.0962 8.11623 15.9897 8.0095C15.8831 7.90276 15.8207 7.75984 15.8148 7.60917L15.7404 5.80917C15.7358 5.70289 15.7029 5.59976 15.6453 5.51035C15.5876 5.42094 15.5072 5.34847 15.4124 5.30036C15.3175 5.25225 15.2115 5.23022 15.1053 5.23655C14.9991 5.24288 14.8965 5.27733 14.808 5.33637L13.3104 6.33237C13.1852 6.41652 13.0328 6.4503 12.8837 6.42694C12.7347 6.40358 12.5999 6.3248 12.5064 6.20637L11.388 4.79277C11.3219 4.70953 11.2349 4.64534 11.1359 4.60677C11.0369 4.56819 10.9294 4.55661 10.8244 4.57321C10.7194 4.58981 10.6207 4.634 10.5385 4.70125C10.4562 4.7685 10.3932 4.8564 10.356 4.95597L9.72723 6.64437C9.67542 6.78579 9.57203 6.90239 9.4378 6.97072C9.30358 7.03906 9.14847 7.05408 9.00363 7.01277L7.26843 6.52797C7.16589 6.4991 7.05752 6.49805 6.95444 6.52493C6.85137 6.55181 6.75731 6.60565 6.68192 6.68091C6.60654 6.75617 6.55255 6.85014 6.5255 6.95318C6.49846 7.05621 6.49933 7.16458 6.52803 7.26717L7.01283 9.00356C7.05327 9.1484 7.03785 9.30314 6.96962 9.43715C6.9014 9.57116 6.78534 9.67466 6.64443 9.72717L4.95603 10.356C4.85646 10.3931 4.76856 10.4561 4.70131 10.5384C4.63406 10.6207 4.58987 10.7194 4.57327 10.8243C4.55667 10.9293 4.56825 11.0368 4.60683 11.1358C4.6454 11.2349 4.70959 11.3219 4.79283 11.388L6.20643 12.5076C6.32449 12.601 6.40311 12.7354 6.42667 12.8841C6.45024 13.0329 6.41702 13.185 6.33363 13.3104L5.33643 14.8092C5.27765 14.8977 5.24346 15.0003 5.23735 15.1064C5.23124 15.2125 5.25343 15.3184 5.30165 15.4131C5.34986 15.5078 5.42238 15.588 5.51178 15.6455C5.60117 15.703 5.70423 15.7358 5.81043 15.7404L7.61043 15.8148C7.76089 15.821 7.90352 15.8835 8.01 15.99C8.11648 16.0965 8.17903 16.2391 8.18523 16.3896L8.25963 18.1896C8.26409 18.2959 8.29678 18.3992 8.35435 18.4888C8.41192 18.5784 8.49228 18.651 8.5872 18.6993C8.68211 18.7475 8.78816 18.7696 8.89445 18.7634C9.00074 18.7571 9.10345 18.7226 9.19203 18.6636L10.6896 17.6676C10.815 17.5837 10.9673 17.5501 11.1163 17.5734C11.2652 17.5968 11.4 17.6754 11.4936 17.7936L12.612 19.2072C12.6781 19.2904 12.7651 19.3546 12.8641 19.3932C12.9632 19.4317 13.0707 19.4433 13.1757 19.4267C13.2806 19.4101 13.3793 19.3659 13.4616 19.2987C13.5439 19.2314 13.6069 19.1435 13.644 19.044L14.2728 17.3556C14.3253 17.2147 14.4288 17.0986 14.5628 17.0304C14.6969 16.9621 14.8516 16.9467 14.9964 16.9872L16.7316 17.4708C16.8342 17.5 16.9428 17.5012 17.046 17.4741C17.1492 17.4471 17.2433 17.3929 17.3184 17.3172C17.3946 17.2426 17.4491 17.1487 17.4762 17.0456C17.5032 16.9425 17.5018 16.8339 17.472 16.7316L16.9872 14.9952C16.9468 14.8503 16.9622 14.6956 17.0304 14.5616C17.0987 14.4276 17.2147 14.3241 17.3556 14.2716L19.044 13.644C19.1436 13.6068 19.2315 13.5438 19.2987 13.4615C19.366 13.3792 19.4102 13.2806 19.4268 13.1756C19.4434 13.0706 19.4318 12.9631 19.3932 12.8641C19.3547 12.7651 19.2917 12.6781 19.2084 12.612Z" fill="#5B5B5B" />
                </svg> Offers</Link>

                <Separator pt="122.5px" />

                <Link _hover={{ textDecor: "underline" }} href="/dashboard/settings" fontWeight="400" p="16px"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.59402 3.94C9.68402 3.398 10.154 3 10.704 3H13.297C13.847 3 14.317 3.398 14.407 3.94L14.62 5.221C14.683 5.595 14.933 5.907 15.265 6.091C15.339 6.131 15.412 6.174 15.485 6.218C15.81 6.414 16.205 6.475 16.56 6.342L17.777 5.886C18.0264 5.79221 18.301 5.78998 18.5519 5.87971C18.8028 5.96945 19.0137 6.14531 19.147 6.376L20.443 8.623C20.5761 8.8537 20.623 9.12413 20.5754 9.38617C20.5278 9.6482 20.3887 9.88485 20.183 10.054L19.18 10.881C18.887 11.122 18.742 11.494 18.75 11.873C18.7514 11.958 18.7514 12.043 18.75 12.128C18.742 12.506 18.887 12.878 19.18 13.119L20.184 13.946C20.608 14.296 20.718 14.901 20.444 15.376L19.146 17.623C19.0129 17.8536 18.8022 18.0296 18.5515 18.1195C18.3009 18.2094 18.0264 18.2074 17.777 18.114L16.56 17.658C16.205 17.525 15.81 17.586 15.484 17.782C15.4115 17.8261 15.3382 17.8688 15.264 17.91C14.933 18.093 14.683 18.405 14.62 18.779L14.407 20.06C14.317 20.603 13.847 21 13.297 21H10.703C10.153 21 9.68402 20.602 9.59302 20.06L9.38002 18.779C9.31802 18.405 9.06802 18.093 8.73602 17.909C8.66187 17.8681 8.58852 17.8258 8.51602 17.782C8.19102 17.586 7.79602 17.525 7.44002 17.658L6.22302 18.114C5.97375 18.2075 5.69939 18.2096 5.44872 18.1199C5.19806 18.0302 4.98733 17.8545 4.85402 17.624L3.55702 15.377C3.42397 15.1463 3.37707 14.8759 3.42468 14.6138C3.47229 14.3518 3.61131 14.1152 3.81702 13.946L4.82102 13.119C5.11302 12.879 5.25802 12.506 5.25102 12.128C5.24946 12.043 5.24946 11.958 5.25102 11.873C5.25802 11.493 5.11302 11.122 4.82102 10.881L3.81702 10.054C3.61156 9.88489 3.4727 9.64843 3.42509 9.38662C3.37749 9.12481 3.42424 8.8546 3.55702 8.624L4.85402 6.377C4.98721 6.14614 5.19803 5.97006 5.44894 5.88014C5.69984 5.79021 5.97451 5.79229 6.22402 5.886L7.44002 6.342C7.79602 6.475 8.19102 6.414 8.51602 6.218C8.58802 6.174 8.66202 6.132 8.73602 6.09C9.06802 5.907 9.31802 5.595 9.38002 5.221L9.59402 3.94Z" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg> Settings</Link>
                <Link _hover={{ textDecor: "underline" }} onClick={handleLogout} fontWeight="400" p="16px" color="#D41A1F">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14 19.75H15C17.0711 19.75 18.75 18.0711 18.75 16V8C18.75 5.92893 17.0711 4.25 15 4.25H14M8.24998 15.25L6.23743 13.2374C5.554 12.554 5.554 11.446 6.2374 10.7626L8.24998 8.75M8.74998 12H15.75" stroke="#D41A1F" stroke-width="1.25" stroke-linecap="round" />
                    </svg>
                    Log out
                </Link>
            </VStack>
        </Box>
    );
};

export default Sidebar;
