<template>
    <div class="col">
        <Typography :variant="ETypographyVariant.DisplayLarge">DisplayLarge</Typography>
        <Typography :variant="ETypographyVariant.DisplayMedium">DisplayMedium</Typography>
        <Typography :variant="ETypographyVariant.DisplaySmall">DisplaySmall</Typography>

        <Typography :variant="ETypographyVariant.HeadlineLarge">HeadlineLarge</Typography>
        <Typography :variant="ETypographyVariant.HeadlineMedium">HeadlineMedium</Typography>
        <Typography :variant="ETypographyVariant.HeadlineSmall">HeadlineSmall</Typography>

        <Typography :variant="ETypographyVariant.TitleLarge">TitleLarge</Typography>
        <Typography :variant="ETypographyVariant.TitleMedium">TitleMedium</Typography>
        <Typography :variant="ETypographyVariant.TitleSmall">TitleSmall</Typography>

        <Typography :variant="ETypographyVariant.BodyLarge">BodyLarge</Typography>
        <Typography :variant="ETypographyVariant.BodyMedium">BodyMedium</Typography>
        <Typography :variant="ETypographyVariant.BodySmall">BodySmall</Typography>

        <Typography :variant="ETypographyVariant.LabelLarge">LabelLarge</Typography>
        <Typography :variant="ETypographyVariant.LabelMedium">LabelMedium</Typography>
        <Typography :variant="ETypographyVariant.LabelSmall">LabelSmall</Typography>
    </div>
</template>

<script setup lang="ts">
import { ETypographyVariant, Typography } from '../../../../../vue-mdc/src/components/typography'

</script>

<style scoped>
.col {
    display: flex;
    flex-direction: column;
}
</style>
