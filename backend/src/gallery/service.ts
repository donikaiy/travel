import galleryRepository from '../gallery/repository.ts'

export const getGalleryImagesByGalleryId = async (galleryId: number) => {
    return galleryRepository.getGalleryImagesByGalleryId(galleryId)
}

export const getAllGalleryImagesByGalleryEntries = async (galleryEntries: number[]) => {
    return galleryRepository.getAllGalleryImagesByGalleryEntries(galleryEntries)
}
