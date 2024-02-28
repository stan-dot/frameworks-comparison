import { Grid, View } from "@adobe/react-spectrum";
import { LayoutProps } from "./LayoutProps";

function BaseLayout({ navChild, topChild, bottomChild }: LayoutProps) {
    return (
        <div>
            BaseLayout
            <Grid
                areas={["header  header", "sidebar content", "footer  footer"]}
                columns={["1fr", "3fr"]}
                rows={["size-1000", "auto", "size-1000"]}
                height="size-6000"
                gap="size-100"
            >
                <View backgroundColor="celery-600" gridArea="header" >
                    {navChild}
                </View>
                <View backgroundColor="blue-600" gridArea="sidebar" >
                    {topChild}
                </View>
                <View backgroundColor="purple-600" gridArea="content" >
                    {bottomChild}
                </View>
                <View backgroundColor="magenta-600" gridArea="footer" >
                    <p>footer</p>
                </View>
            </Grid>
        </div>
    );
}

export default BaseLayout;
